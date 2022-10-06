import { promises as fs } from "fs";
import path from "path";
import process, { exit } from "process";
import * as url from "url";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { ProjectDir, SpiritGroups } from "./constants.js";
import { renderImages } from "./renderImages.js";
import { renderToPdf } from "./renderToPdf.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

async function getSpiritsInGroup(spiritGroup) {
  const spiritGroupDir = path.join(ProjectDir, spiritGroup);
  const spiritNames = await fs.readdir(spiritGroupDir);
  const filteredSpiritNames = spiritNames.filter((n) => n !== ".DS_Store");
  return filteredSpiritNames;
}

async function renderAllImages() {
  for (const spiritGroup of SpiritGroups) {
    await renderSpiritGroup(spiritGroup);
  }
}

async function renderSpiritGroup(spiritGroup) {
  const spiritGroupExists = SpiritGroups.indexOf(spiritGroup) >= 0;
  if (!spiritGroupExists) {
    console.log(`Spirit group \"${spiritGroup}\" does not exist`);
    console.log(`Possible values are: \n  ${SpiritGroups.join(', ')}`);
    exit();
  }
  const spiritNames = await getSpiritsInGroup(spiritGroup);
  for (const spiritName of spiritNames) {
    await renderSpirit(spiritName);
  }
}

async function getSpiritsBySpiritGroup() {
  const spiritToGroupMap = {};
  for (const spiritGroup of SpiritGroups) {
    const spiritsNames = await getSpiritsInGroup(spiritGroup);
    for (const spiritName of spiritsNames) {
      spiritToGroupMap[spiritName] = spiritGroup;
    }
  }
  return spiritToGroupMap;
}

async function renderSpirit(spiritName) {
  const spiritMap = await getSpiritsBySpiritGroup();
  const spiritGroup = spiritMap[spiritName];
  if (spiritGroup == null) {
    console.log(`Spirit \"${spiritName}\" does not exist`);
    console.log("Possible values are:");
    console.log(Object.keys(spiritMap).sort().join(", "));
    exit();
  }
  const imageDatas = await renderImages(spiritGroup, spiritName);
  await renderToPdf(spiritName, imageDatas);
}

yargs(hideBin(process.argv))
  .command(
    "render-all",
    "Render all spirits to hard-coded output locations",
    () => { },
    (argv) => {
      renderAllImages();
    }
  )
  .command(
    "render-group <spirit-group>",
    "Renders all of one person's spirits",
    () => { },
    (argv) => {
      renderSpiritGroup(argv["spirit-group"]);
    }
  )
  .command(
    "render-spirit <spirit-name>",
    "Renders a specific spirit",
    () => { },
    (argv) => {
      renderSpirit(argv["spirit-name"]);
    }
  )
  .strict()
  .demandCommand().argv;


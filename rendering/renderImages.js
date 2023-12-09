import { promises as fs } from "fs";
import os from "os";
import path from "path";
import puppeteer from "puppeteer";
import { v4 as uuidv4 } from "uuid";
import { ProjectDir, SourceSpecs } from "./constants.js";
import { exists } from "./utils.js";

async function screenshot(sourceHtml, destinationFile, screensize) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file://" + sourceHtml);
  await page.setViewport(screensize);
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
  await page.screenshot({ path: destinationFile });
  await browser.close();
}

// Returns a list of all created image files
export async function renderImages(spiritGroup, spiritName) {
  const groupDir = path.join(ProjectDir, spiritGroup);
  const spiritDir = path.join(groupDir, spiritName);

  const tmpDir = os.tmpdir();
  const destDir = path.join(tmpDir, uuidv4());

  const destExists = await exists(destDir);
  if (!destExists) {
    await fs.mkdir(destDir);
  }

  console.log("Rendering " + spiritName);
  const imageFiles = [];

  const folderFiles = await fs.readdir(spiritDir);
  for (const filename of folderFiles) {
    if (path.extname(filename) !== ".html") {
      continue;
    }
    const spec = SourceSpecs[filename];
    const source = path.join(spiritDir, filename);
    if (spec == null) {
      console.warn("Found html file with no spec: ", source);
      continue;
    }
    const { size: windowSize, scale: pageScale } = SourceSpecs[filename];
    const destPng = filename.substring(0, filename.length - 5) + ".png";
    const destImage = path.join(destDir, destPng);
    console.log("  Rendering " + destImage);
    await screenshot(source, destImage, windowSize);
    imageFiles.push({
      file: destImage,
      sourceType: filename,
      windowSize,
      pageScale,
    });
  }

  return imageFiles;
}

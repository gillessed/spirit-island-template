import { promises as fs } from "fs";
import os from "os";
import path from "path";
import puppeteer from "puppeteer";
import { v4 as uuidv4 } from 'uuid';
import { ProjectDir, SourceFiles } from "./constants.js";
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
  for (const [sourceType, windowSize, pageScale] of SourceFiles) {
    const source = path.join(spiritDir, sourceType);
    const sourceExists = await exists(source);
    if (!sourceExists) {
      continue;
    }
    const destPng = sourceType.substring(0, sourceType.length - 5) + ".png";
    const destImage = path.join(destDir, destPng);
    console.log("  Rendering " + destImage);
    await screenshot(source, destImage, windowSize);
    imageFiles.push({
      file: destImage,
      sourceType,
      windowSize,
      pageScale,
    });
  }1
  return imageFiles;
}

import { jsPDF } from "jspdf";
import path from "path";
import { SpiritPdfDir } from "./constants.js";
import { assertExists, exists } from "./utils.js";
import { promises as fs } from "fs";

/*
images: Array<{
  file: string,
  sourceType: string,
  windowSize: [number, number],
  pageScale: number,
}
 */
export async function renderToPdf(spiritName, imageDatas) {
  await assertExists(SpiritPdfDir);
  const destination = path.join(SpiritPdfDir, `${spiritName}.pdf`);

  const destinationExists = await exists(destination);
  if (destinationExists) {
    await fs.unlink(destination);
  }

  console.log("Rendering " + spiritName + " to PDF " + destination);

  const doc = new jsPDF("landscape");
  for (let i = 0; i < imageDatas.length; i++) {    
    const { file, windowSize, pageScale } = imageDatas[i];
    const aspectRatio = windowSize.height / windowSize.width;

    const imageFileData = await fs.readFile(file);

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const imageWidth = pageWidth * pageScale;
    const imageHeight = imageWidth * aspectRatio;

    const offsetX = (pageWidth - imageWidth) / 2;
    const offsetY = (pageHeight - imageHeight) / 2;

    doc.addImage(imageFileData, 'JPEG', offsetX, offsetY, imageWidth, imageHeight);

    if (i < imageDatas.length - 1) {
      doc.addPage();
    }
  }
  await doc.save(destination, { returnPromise: true });
}

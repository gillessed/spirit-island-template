import { promises as fs } from "fs";
import path from "path";
import { jsPDF } from "jspdf";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export async function renderImages(spiritGroup, spiritGroupFolder, outputFile) {
  console.log("Rendering " + spiritGroup + " to PDF " + outputFile);

  try {

    const spiritFolderNames = await fs.readDir(spiritGroupFolder);
    for (const spiritFolderName of spiritFolderNames) {
      const spiritFolder = path.join(spiritGroupFolder, spiritFolderName);
      const imageNames = 
    }
  }
  
}

import path from "path";
import * as url from "url";

export const SpiritGroups = [
  "greg-spirits",
  "shalin-hana-spirit",
  "greg-adversaries",
];

const CardScale = 0.97;
const BoardScale = 0.88;

const CardSize = { width: 2035, height: 750, deviceScaleFactor: 2 };
const BoardSize = { width: 1827, height: 1237, deviceScaleFactor: 2 };
const AdversarySize = { width: 1000, height: 667, deviceScaleFactor: 4 };

export const SourceSpecs = {};

function createCardSpec(filename) {
  SourceSpecs[filename] = { size: CardSize, scale: CardScale };
}

function createBoardSpec(filename) {
  SourceSpecs[filename] = { size: BoardSize, scale: BoardScale };
}

function createAdversarySpec(filename) {
  SourceSpecs[filename] = { size: AdversarySize, scale: BoardScale };
}

createCardSpec("card-front.html");
createCardSpec("card-front-1.html");
createCardSpec("card-front-2.html");
createCardSpec("card-back.html");
createCardSpec("card-back-1.html");
createCardSpec("card-back-2.html");
createBoardSpec("board-front.html");
createBoardSpec("board-lore.html");
createBoardSpec("board-rules.html");
createAdversarySpec("adversary.html");
createAdversarySpec("adversary-extra.html");

createBoardSpec("eldritch-adversary.html");
createBoardSpec("cthulu.html");
createCardSpec("mythos-card-back.html");
for (let i = 1; i < 100; i++) {
  createCardSpec(`mythos-cards-${i}.html`);
  createCardSpec(`mythos-backs-${i}.html`);
}

export const ScriptDir = url.fileURLToPath(new URL(".", import.meta.url));
export const ProjectDir = path.resolve(ScriptDir, `../`);
export const SpiritPdfDir = path.join(ProjectDir, "spirit-pdfs");

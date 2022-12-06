import path from "path";
import * as url from "url";

export const SpiritGroups = ["greg-spirits", "shalin-hana-spirit", "greg-adversaries"];

const CardScale = 0.97;
const BoardScale = 0.88;

const CardSize = { width: 2035, height: 750, deviceScaleFactor: 2 };
const BoardSize = { width: 1827, height: 1237, deviceScaleFactor: 2 };
const AdversarySize = { width: 1000, height: 667, deviceScaleFactor: 4 };

export const CardFront = ["card-front.html", CardSize, CardScale];
export const CardFront1 = ["card-front-1.html", CardSize, CardScale];
export const CardFront2 = ["card-front-2.html", CardSize, CardScale];
export const CardBack = ["card-back.html", CardSize, CardScale];
export const CardBack1 = ["card-back-1.html", CardSize, CardScale];
export const CardBack2 = ["card-back-2.html", CardSize, CardScale];
export const BoardFront = ["board-front.html", BoardSize, BoardScale];
export const BoardLore = ["board-lore.html", BoardSize, BoardScale];
export const BoardRules = ["board-rules.html", BoardSize, BoardScale];
export const Adversary = ["adversary.html", AdversarySize, BoardScale];
export const AdversaryExtra = ["adversary-extra.html", AdversarySize, BoardScale];
export const SourceFiles = [CardFront, CardBack, BoardFront, BoardLore, BoardRules, CardFront1, CardFront2, CardBack1, CardBack2, Adversary, AdversaryExtra];

export const ScriptDir = url.fileURLToPath(new URL(".", import.meta.url));
export const ProjectDir = path.resolve(ScriptDir, `../`);
export const SpiritPdfDir = path.join(ProjectDir, "spirit-pdfs");

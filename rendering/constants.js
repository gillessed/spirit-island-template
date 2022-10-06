import path from "path";
import * as url from "url";

export const SpiritGroups = ["greg-spirits", "shalin-hana-spirit"];

const CardScale = 0.95;
const BoardScale = 0.85;

export const CardFront = ["card-front.html", { width: 2035, height: 750 }, CardScale];
export const CardFront1 = ["card-front-1.html", { width: 2035, height: 750 }, CardScale];
export const CardFront2 = ["card-front-2.html", { width: 2035, height: 750 }, CardScale];
export const CardBack = ["card-back.html", { width: 2035, height: 750 }, CardScale];
export const CardBack1 = ["card-back-1.html", { width: 2035, height: 750 }, CardScale];
export const CardBack2 = ["card-back-2.html", { width: 2035, height: 750 }, CardScale];
export const BoardFront = ["board-front.html", { width: 1827, height: 1237 }, BoardScale];
export const BoardLore = ["board-lore.html", { width: 1827, height: 1237 }, BoardScale];
export const BoardRules = ["board-rules.html", { width: 1827, height: 1237 }, BoardScale];
export const SourceFiles = [CardFront, CardBack, BoardFront, BoardLore, BoardRules, CardFront1, CardFront2, CardBack1, CardBack2];

export const ScriptDir = url.fileURLToPath(new URL(".", import.meta.url));
export const ProjectDir = path.resolve(`../`);
export const SpiritPdfDir = path.join(ProjectDir, "spirit-pdfs");
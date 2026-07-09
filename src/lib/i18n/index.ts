export type { Translations, Lang } from "./types";
export { ko } from "./ko";
export { en } from "./en";

import { ko } from "./ko";
import { en } from "./en";
import type { Lang, Translations } from "./types";

export const translations: Record<Lang, Translations> = { ko, en };

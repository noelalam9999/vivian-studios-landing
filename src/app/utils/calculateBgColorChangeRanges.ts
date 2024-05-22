import { IBreakpoints } from "../interfaces/IBreakpoints";
import { IProject } from "../interfaces/IProject";

export function calculateBgColorChangeRanges(
  startLine: number,
  cards: IProject[],
  cardWidth: number
): IBreakpoints {
  let breakpoints: IBreakpoints = {};
  cards.forEach((card, i) => {
    breakpoints[startLine - i * cardWidth] = card.id;
  });
  return breakpoints;
}

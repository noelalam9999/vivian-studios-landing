import { IBreakpoints } from "../interfaces/IBreakpoints";
import { IProject } from "../interfaces/IProject";
import { IPortfolio } from "./portfolioList";

export function calculateBgColorChangeRanges(
  startLine: number,
  cards: IPortfolio[],
  cardWidth: number
): IBreakpoints {
  let breakpoints: IBreakpoints = {};
  cards.forEach((card, i) => {
    breakpoints[startLine - i * cardWidth] = card.id;
  });
  return breakpoints;
}

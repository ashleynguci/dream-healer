import _ from "lodash";
import { nonSpace, spaceBetween, alphabet } from "./constant";

export const countString = (input) => {
  const withSpaces = input.length;
  input  = input.trim();
  const withoutSpaces = input ? input.match(nonSpace).length : 0;
  const wordCount = input ? input.split(spaceBetween).length : 0;
  const characterCount = countCharacter(input);
  return {
    textLength: { withSpaces, withoutSpaces },
    wordCount,
    characterCount,
  };
};

export const countCharacter = (input) => {
  input = input.toLowerCase();
  const array = input.match(alphabet);
  if (!array) {
    return [];
  } 
    const sortedChar = _.sortedUniq(array.sort());
    const countChar = (char) => {
      return { [`${char}`]: input.match(new RegExp(`${char}`, "g")).length };
    };
    return _.map(sortedChar, countChar);
};

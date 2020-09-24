import _ from "lodash";
import {nonSpace, spaceBetween, alphabet} from './constant';

export const countString = (input) => {
  input = input.toLowerCase();
  const withSpaces = input.length;
  const withoutSpaces = input.match(nonSpace).length;
  const wordCount = input.trim().split(spaceBetween).length;
  const characterCount = countCharacter(input);
  return {
    textLength: { withSpaces, withoutSpaces },
    wordCount,
    characterCount,
  };
};

const countCharacter = (input) => {
  const array = input.match(alphabet).sort();
  const result = _.sortedUniq(array);
  const countChar = (char) => {
    return { [`${char}`]: input.match(new RegExp(`${char}`, "g")).length };
  };
  return _.map(result, countChar);
};

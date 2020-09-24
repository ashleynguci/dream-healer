import _ from "lodash";

export const countString = (input) => {
  input = input.toLowerCase();
  const withSpaces = input.length;
  const withoutSpaces = input.match(/\S/g).length;
  const wordCount = input.trim().split(/\s+/).length;
  const characterCount = countCharacter(input);
  return {
    textLength: { withSpaces, withoutSpaces },
    wordCount,
    characterCount,
  };
};

const countCharacter = (input) => {
  const array = input.match(/[a-z]/g).sort();
  const result = _.sortedUniq(array);
  const countChar = (char) => {
    return { [`${char}`]: input.match(new RegExp(`${char}`, "g")).length };
  };
  return _.map(result, countChar);
};

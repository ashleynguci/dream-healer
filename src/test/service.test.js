import { countString, countCharacter } from "../service";

describe(" test countString function", () => {
  test("Test with trailing spaces", () => {
    const result = countString(" trailing spaces...     ");
    expect(result.textLength.withoutSpaces).toBe(17);
  });

  test("should count only alphabet in characterCount", () => {
    const result = countString("   @ 2 2 aaa bbb   ");
    expect(result.characterCount.length).toBe(2);
  });

  test("should return wordCount value is 5", () => {
    const result = countString("  2 cc aaa 4  bbb   ");
    expect(result.wordCount).toBe(5);
  });

  test("test empty text ", () => {
    const result = countString("    ");
    expect(result.characterCount).toStrictEqual([]);
  });
});

describe('countCharacter', () => {
    test("should return []", () => {
        const result = countCharacter("7, 8");
        expect(result).toStrictEqual([]);
      });
})
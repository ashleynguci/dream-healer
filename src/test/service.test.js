import { countString, countCharacter } from "../service";

describe(" test countString function", () => {
  test("should return {'a':1}", () => {
    const result = countString("run 2 2 world and see   2");
    expect(result.characterCount[0]).toMatchObject({ a: 1 });
  });

  test("should count only alphabet in characterCount", () => {
    const result = countString("   @ 2 2 aaa bbb   ");
    expect(result.characterCount.length).toBe(2);
  });

  test("should return wordCount value is 5", () => {
    const result = countString("  2 cc aaa 4  bbb   ");
    expect(result.wordCount).toBe(5);
  });

  test("should return [{ \"a\": 2 },{\"b\":2},{\"c\":2}]", () => {
    const result = countString("abc#  ABC @@");
    expect(result.characterCount).toStrictEqual([{ "a": 2 },{"b":2},{"c":2}]);
  });
});

describe('countCharacter', () => {
    test("should return [{ \"a\": 2 },{\"b\":2},{\"c\":3}]", () => {
        const result = countCharacter("abc#  abcc @@");
        expect(result).toStrictEqual([{ "a": 2 },{"b":2},{"c":3}]);
      });
})
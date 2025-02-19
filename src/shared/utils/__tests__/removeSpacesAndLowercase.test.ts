import { removeSpacesAndLowercase } from "../removeSpacesAndLowercase";

describe("removeSpacesAndLowercase", () => {
  it("should remove spaces and convert to lowercase", () => {
    const input = "Hello World";
    const expected = "helloworld";
    expect(removeSpacesAndLowercase(input)).toBe(expected);
  });

  it("should handle multiple spaces", () => {
    const input = "  Hello   World  ";
    const expected = "helloworld";
    expect(removeSpacesAndLowercase(input)).toBe(expected);
  });

  it("should convert mixed case to lowercase", () => {
    const input = "HeLLo WoRLd";
    const expected = "helloworld";
    expect(removeSpacesAndLowercase(input)).toBe(expected);
  });

  it("should return an empty string if input is empty", () => {
    const input = "";
    const expected = "";
    expect(removeSpacesAndLowercase(input)).toBe(expected);
  });

  it("should handle strings with no spaces", () => {
    const input = "HelloWorld";
    const expected = "helloworld";
    expect(removeSpacesAndLowercase(input)).toBe(expected);
  });

  it("should handle strings with only spaces", () => {
    const input = "     ";
    const expected = "";
    expect(removeSpacesAndLowercase(input)).toBe(expected);
  });
});
s;

import fs from "fs";
import path from "path";

describe("jest cache", () => {
  it("exists", () => {
    expect(fs.existsSync(path.join(__dirname, ".jest-cache"))).toEqual(true);
  });
});

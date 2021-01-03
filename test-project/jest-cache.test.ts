import fs from "fs";
import path from "path";

describe("jest cache", () => {
  it("exists", () => {
    // This file is manually written out in the integration test steps and should be restored between runs
    expect(
      fs.existsSync(path.join(__dirname, ".jest-cache", "RESTORED_FILE.txt"))
    ).toEqual(true);
  });
});

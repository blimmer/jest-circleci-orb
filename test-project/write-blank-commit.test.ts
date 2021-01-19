import { spawnSync } from "child_process";

if (process.env.CIRCLECI) {
  describe("circleci", () => {
    it("writes a test commit to avoid writing a cache", () => {
      spawnSync("echo", ["change", ">>", "README.md"], {
        shell: true,
      });
      spawnSync("git", ["add", "README.md"]);
      spawnSync("git", ["commit", "-m", "no-op commit"]);
      spawnSync(
        "git",
        ["rev-parse", "HEAD", ">", "/tmp/jest-cache-current-commit-hash.txt"],
        {
          shell: true,
        }
      );
    });
  });
}

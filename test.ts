import { test, type TestContext } from "node:test";
import { spawnSync as cmd } from "node:child_process";

test("Should find #tsconfig-base", (t: TestContext) => {
  t.assert.doesNotMatch(
    `${cmd("node", ["--run", "build"]).stderr}`,
    /Cannot find base config file "#tsconfig-base"/
  );
});

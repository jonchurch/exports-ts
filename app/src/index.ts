import { exit } from "node:process";
import { wait } from "package";
import { doNotWait } from "package/submodule";

const world = "hello";

wait(1000).then(() => console.log(world));
doNotWait();
exit(0);

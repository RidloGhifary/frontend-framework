import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Ridlo";
const lastName = "Ghifary";

init("#app", User({ firstName, lastName }));

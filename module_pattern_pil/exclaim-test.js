var repeat = require("./repeat").repeat;
var exclaim = require("./exclaim").exclaim;

if (exclaim(repeat,"hi") !== "hi!!!!!") {
  throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
    console.log("passed!");

}

var hello = require("./exclaim").hello;


if (hello("hi") !== "hi?????") {
  throw new Error("Exclaiming hi should equal hi?????");
} else {
    console.log("passed!");

}

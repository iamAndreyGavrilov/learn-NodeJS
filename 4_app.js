const fs = require("fs");

fs.readFile("./test.txt", "utf8", (error, data) => {
  fs.mkdirSync("./files", () => {
    fs.writeFileSync("./files/test2.txt", `${data} New Text!`, (error) => {
      error ? console.log(error) : null;
    });
  });
});

setTimeout(() => {
  if (fs.existsSync("./files/test2.txt")) {
    fs.unlink("./files/test2.txt", () => {});
  }
}, 4000);

setTimeout(() => {
  if (fs.existsSync("./files")) {
    fs.rmdir("./files", () => {});
  }
}, 6000);

const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./6_docs/text.txt");

const writeStream = fs.createWriteStream("./6_docs/new-text.txt");

const compressStream = zlib.createGzip();

// readStream.on("data", (chunk) => {
//   console.log("-----------------------");
//   console.log(chunk.toString());
// });

// readStream.on("data", (chunk) => {
//   writeStream.write("\n------START------\n");
//   writeStream.write(chunk);
//   writeStream.write("\n------END------\n");
// });

const handleError = () => {
  console.log("Error");
  readStream.destroy();
  writeStream.end("Finished with error...");
};

readStream
  .on("error", handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on("error", handleError);

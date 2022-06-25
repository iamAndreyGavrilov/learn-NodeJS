console.log(global);

setTimeout(() => {
  console.log("hello");
}, 2000);

console.log(__dirname);
console.log(__filename);

console.log(process.argv);
const url = new URL("https://www.google.com/");
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);

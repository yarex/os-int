// const hash = crypto.createHash('sha256').update(input).digest('base64');

const crypto = require("crypto");

const algorithm = process.argv[2] || null;
const text = process.argv[3] || null;

if (algorithm === undefined || algorithm === null) {
  console.log("No algorithm specified as a argument");
  process.exit();
}

if (text === undefined || text === null) {
  console.log("No text passed in as a argument");
  process.exit();
}
const hash = crypto
  .createHash(algorithm.toLowerCase())
  .update(text)
  .digest("hex");
console.log(hash);

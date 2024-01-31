const crypto = require("crypto");

const text = process.argv[2] || null;
if (text === undefined || text === null) {
  console.log("No text passed in as a argument");
  process.exit();
}
const hash = crypto.createHash("md5").update(text).digest("hex");
console.log(hash);

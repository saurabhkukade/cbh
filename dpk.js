const crypto = require("crypto");

/*
This is algorithm is to find the partion key for the given record.
If the record have some value then we need calculate hash to find PK.
The sha3-512 Hex string cannot be more than 128 character, hence the record with NO partitionKey
will always have 128 char string. So no need to check for the size of key and recalulate the hash.

For the records partitionKey we need to check the type of partitionKey, if not string then make it a string first and
if the size is above 256 chars then calculate the hash again and then it will surely be of 128 chars in length. 
Hence the refactor.

*/


exports.deterministicPartitionKey = (record) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (record) {
    if (record.partitionKey) {
      candidate = record.partitionKey;
      if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
      }
      if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
      }
    } else {
      const data = JSON.stringify(record);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }
  return candidate;
};
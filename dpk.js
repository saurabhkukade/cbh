const crypto = require("crypto");

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
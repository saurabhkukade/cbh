const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });


  it("Returns the partionKey of length 128 characters when given some input", () => {
    const trivialKey = deterministicPartitionKey({"name":"John", "age":30, "car":null});
    expect(trivialKey).toHaveLength(128);
  });


  it("Returns the literal partionKey of length 128 characters when given record with partion key of length more than 256 chars", () => {
    const trivialKey = deterministicPartitionKey({"name":"John", "age":30, "car":null, partitionKey:"46b9dd2b0ba88d13233b3feb743eeb243fcd52ea62b81b82b50c27646ed5762fd75dc4ddd8c0f200cb05019d67b592f6fc821c49479ab48640292eacb3b7c4be46b9dd2b0ba88d13233b3feb743eeb243fcd52ea62b81b82b50c27646ed5762fd75dc4ddd8c0f200cb05019d67b592f6fc821c49479ab48640292eacb3b7c4be123"});
    expect(trivialKey).toHaveLength(128);
  });

});

import { generateKeyPair } from "../src/bls12381";

describe("bls12381", () => {
  it("should be able to generate a key pair", () => {
    const result = generateKeyPair();
    expect(result).toBeDefined();
    expect(result.publicKey).toBeDefined();
    expect(result.secretKey).toBeDefined();
    expect(result.secretKey.length).toEqual(48);
    expect(result.publicKey.length).toEqual(192);
  });
});
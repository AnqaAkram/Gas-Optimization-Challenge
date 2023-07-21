const { ethers } = require("hardhat");
const { expect } = require("chai");
const { assertHardhatInvariant } = require("hardhat/internal/core/errors");

describe("Deploy Gas Challenge Contract", () => {
  let gas_contract;

  beforeEach(async () => {
    const gas_challenge_contract = await ethers.getContractFactory(
      "gasChallenge"
    );
    gas_contract = await gas_challenge_contract.deploy();
  });

  describe("Compute Gas", () => {
    it("Should return lower gas", async () => {
      await gas_contract.notOptimizedFunction();
      await gas_contract.optimizedFunction();
    });
  });

  describe("Check Sum Of Array", () => {
    it("Should return 0", async () => {
      // Write test block here to check sum of array equals 0
      await gas_contract.optimizedFunction(); //calling our holy grail of gas optimization
      const sum = await gas_contract.getSumOfArray(); //calculating sum of 'numbers' array once optimized function is called via getSumOfArray function
      expect(sum).equals(0); //expecting the sum value received from previous step equals 0 (sum of numbers array's elements === 0  )
    });
  });
});

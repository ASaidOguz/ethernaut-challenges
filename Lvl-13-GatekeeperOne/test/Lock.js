const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Inheritance-external_call", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploymentFixture() {
   
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const A = await ethers.getContractFactory("A");
    const contract_A = await A.deploy();

    const B = await ethers.getContractFactory("B");
    const contract_B = await A.deploy();

    return { contract_A,contract_B, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should msg.sender address of contract_A", async function () {
      const { contract_A,contract_B, owner, otherAccount } = await loadFixture(deploymentFixture);
console.log("Contract address A",contract_A.address)
console.log("Contract address B",contract_B.address)
      expect(await contract_A.special()).to.equal(contract_A.address);
    });
  });
});

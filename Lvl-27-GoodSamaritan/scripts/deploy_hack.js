// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  
 const vicAddr="0xa7a4F94A780c4C09f34D0e1EFFaa5d7F6a2D5780"
  const Hack = await hre.ethers.getContractFactory("Hack");
  const hack = await Hack.deploy();
  await hack.deployed();

  console.log(
    `Hack deployed to ${hack.address}`
  );
  await hack.attack(vicAddr);
  console.log("Hack succesful!!")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
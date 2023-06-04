// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const hackAddr="0xB39d98c29c917e137DC58E30a1DBfc1F3d9d2b1C"
  const Hack = await hre.ethers.getContractAt("Hack",hackAddr);
  
  await Hack.init()
  await Hack.goBoom()
  
  console.log(
    `Hack completed!!!!`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
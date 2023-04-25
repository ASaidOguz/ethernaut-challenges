// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
//key="0xc852a291dcfb8744012b9e035f324ae23352a2af35a732a94dfb1f9f45a7c052"
async function main() {
  
  const Attack = await hre.ethers.getContractFactory("Attack")
  const attack= await Attack.deploy()
  await attack.deployed()

  console.log(
  `Attack contract deployed at ${attack.address}` 
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
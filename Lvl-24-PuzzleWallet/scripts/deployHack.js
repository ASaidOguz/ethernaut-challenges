// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  

  const walletAddress="0x2860a626f3b60670156AF4A2AA37a7045DEe9928"
  const amount=hre.ethers.utils.parseEther("0.001")
  const Hack = await hre.ethers.getContractFactory("Hack");
  const hack = await Hack.deploy(walletAddress,{value:amount});

  await hack.deployed();
  
  console.log("Hack deployed succesfully on address :",hack.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
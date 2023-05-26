// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  

  
//simple storage slot problem i saw in twitter..
//using local node to print 0-10 storage slot values
  const Result = await hre.ethers.getContractFactory("Result");
  const result = await Result.deploy();

  await result.deployed();
  
  const  slot="0x0"
  for(let i=0;i<10;i++){
    console.log(  
    `SlotValue ${slot+i}:`,await hre.ethers.provider.getStorageAt(result.address,slot+i)) 
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

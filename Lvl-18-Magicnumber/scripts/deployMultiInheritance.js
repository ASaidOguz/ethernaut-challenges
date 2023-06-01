const hre = require("hardhat");
require("dotenv").config();
async function main() {
 
  
  const Minheritance=await hre.ethers.getContractFactory("C")
  const mheritance=await Minheritance.deploy()

   await mheritance.deployed()

   console.log("C.test()=>",await mheritance.test())


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
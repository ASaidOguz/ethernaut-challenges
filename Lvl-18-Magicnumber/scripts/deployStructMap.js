const hre = require("hardhat");
require("dotenv").config();
async function main() {
 
  
  const StructMap=await hre.ethers.getContractFactory("StructMap")
  const structMap=await StructMap.deploy()
  //! This ctf demonstrate the effect of mapping deletion effect ....
   /* await structMap.deployed()
   await structMap.deleteAuditor(1) */
  /*  const{auditorAddr,booly}=await structMap.getAuditorInfo(1) */
   console.log(`structmap deployed to ${structMap.address}`)


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
const gkeeer3Addr='0xa584ac96ac4d2fd257beb749978c742976bd0d54'
let slotvalue
for(let i=0;i<10;i++){
slotvalue=await hre.ethers.provider.getStorageAt(gkeeer3Addr,`0x${i}`)  
console.log(`Slot value of 0x${i}:${slotvalue}`)  
}


  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
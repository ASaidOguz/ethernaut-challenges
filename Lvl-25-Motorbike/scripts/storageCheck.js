// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 const engineAddr="" 
const motorBike="0xACFA1CCd19b747dE4A499A0c8d87bD4232f13EBE"
const impSlot="0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"
let slotvalue
for(let i=0;i<10;i++){
slotvalue=await hre.ethers.provider.getStorageAt(motorBike,`0x${i}`)  
console.log(`Victim contract Slot value of 0x${i}:${slotvalue}`)  
}
console.log("----------------------------------------------------")
slotvalue=await hre.ethers.provider.getStorageAt(motorBike,`${impSlot}`)  
console.log(`Motorbike contract Slot value of 0xımpslot:${slotvalue}`) 
console.log("----------------------------------------------------")
//!Lets check logics initialize parameters...
const logicAddr="0x"+slotvalue.substring(26)
for(let i=0;i<10;i++){
    slotvalue=await hre.ethers.provider.getStorageAt(logicAddr,`0x${i}`)  
    console.log(`Victim contract Slot value of 0x${i}:${slotvalue}`)  
    }
    //? You will see that it's empty and init state inside proxy contract ...
    //? Means you can call init function many times
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
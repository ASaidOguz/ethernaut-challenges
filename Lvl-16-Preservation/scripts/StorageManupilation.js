// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const strslot='0x2'
  const preservationAddr="0x6F5A659F5479246a19C4859EC297652551202DB4"
  const slotValue = await hre.ethers.provider.getStorageAt(preservationAddr,strslot)
  const timestamp="0"
  console.log(
    `Preservation storage slot ${strslot}:${slotValue}`
  );

  const Preservation= await hre.ethers.getContractAt("Preservation",preservationAddr)
  /*
   As the previous level, delegate mentions, the use of delegatecall to call libraries can be risky. 
  This is particularly true for contract libraries that have their own state. This example demonstrates
   why the library keyword should be used 
  for building libraries, as it prevents the libraries from storing and accessing state variables. */


}
/* 
Extra info
The constant setTimeSignature is not stored in any storage slot in this contract.
 It is a compile-time constant 
that is used to define the function 
signature for the delegatecall function in the Preservation contract. */

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

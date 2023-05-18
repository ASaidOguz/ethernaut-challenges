// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const preservationAddr="0x6F5A659F5479246a19C4859EC297652551202DB4"
  const Attack=await hre.ethers.getContractFactory("Attack");
  const attack=await Attack.deploy(preservationAddr);
  await attack.deployed();


  console.log(
    `Attack contract deployed at : ${attack.address}`
  );
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

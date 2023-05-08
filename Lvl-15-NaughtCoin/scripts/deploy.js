// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const playerAddr="0x92e5c70Dd41824a0617e07271A7E1e81A9BcE064"
  const NaughtCoin = await hre.ethers.getContractFactory("NaughtCoin");
  const naughtcoin = await NaughtCoin.deploy(playerAddr);

  await naughtcoin.deployed();

  console.log(
    `Naughtcoin  deployed to ${naughtcoin.address}`
  );
}
/* 
    For this challenge, you need to be familiar with ERC20 tokens and their functions. 
The challenge consists of a lockup contract inheriting from ERC20 tokens. Its transfer function
 has been overwritten to check that one can only withdraw tokens after some time has passed. 
 However, transfer is not the only function in ERC20 that allows for moving tokens. 
 We can combine allow and transferFrom to transfer tokens. Both functions exist on the lockup contract in 
 their original form due to inheritance and have not been explicitly overwritten. 
 */
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

//Extra info : While challenge seems compiled on version 0.8.0 the actual compiler version is 0.8.12 
//which creates problem while verifiying the contract thus making the challenge somehow hard and sites interface
//doesnt work as intended
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

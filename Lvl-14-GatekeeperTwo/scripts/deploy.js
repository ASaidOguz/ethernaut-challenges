// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 

const gatekeeperTwoAddr="0x550a01067bF3A0E0820a594323BB824f82aF201F"

/* 
  //This part used in local network to check if the solution is correct!!
  const Gatekeeper = await hre.ethers.getContractFactory("GatekeeperTwo");
  const gatekeeper = await Gatekeeper.deploy();
  await gatekeeper.deployed();

  console.log(
    ` Gatekeeperone deployed to ${gatekeeper.address}`
  ); */

  const Attack = await hre.ethers.getContractFactory("Attack");
  const attack = await Attack.deploy(gatekeeperTwoAddr);
  await attack.deployed();

  console.log(
    ` Attack contract deployed to ${attack.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

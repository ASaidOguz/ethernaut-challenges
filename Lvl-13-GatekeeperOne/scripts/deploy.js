// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
 /*  const Gatekeeper = await hre.ethers.getContractFactory("GatekeeperOne");
  const gatekeeper = await Gatekeeper.deploy();
  await gatekeeper.deployed();
  console.log(
    `Gatekeeperone deployed on ${gatekeeper.address}`
    ) */
 const gatekeeperOneAddr="0x00F62E96096b9dc6A83eC3dfe78a305368280022"

  const Contract = await hre.ethers.getContractFactory("Attack");
  const contract = await Contract.deploy(gatekeeperOneAddr);
  await contract.deployed();

  console.log(
    `Attack contract deployed on ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

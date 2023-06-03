// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

const gatekeeperAddr="0x9164F267f778274a63211AbEEA5977d7397354D4"
/*   const Gatekeeper3 = await hre.ethers.getContractFactory("GatekeeperThree");
  const gatekeeper3 = await Gatekeeper3.deploy();
  await gatekeeper3.deployed();

  console.log(
    `GatekeeperIII deployed at ${gatekeeper3.address}`
  ); */
  const gkeeper3=await hre.ethers.getContractAt("GatekeeperThree",gatekeeperAddr)
  await gkeeper3.createTrick()


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

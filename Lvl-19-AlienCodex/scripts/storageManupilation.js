// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const web3 = require("web3");
async function main() {
    //const codexslot = web3.utils.soliditySha3("1");
    const codexslot ="0x0"
     console.log("Length slot of dynamic array keccak256 hash",codexslot)
  const alienCodexAddr ="0x3945c899D0d0B2F257Fe8D93e126A36f1BD84B5A"
  const Aliencodex = await hre.ethers.getContractAt("AlienCodex",alienCodexAddr);
  
  const slotValue = await hre.ethers.provider.getStorageAt(alienCodexAddr,codexslot)
  console.log(
    `AlienCodex slot ${codexslot} value : ${slotValue}`
  );
  console.log(
    `AlienCodex contact ${await Aliencodex.contact()}!`
  );
  console.log(
    `AlienCodex contract owner: ${await Aliencodex.owner()}!`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
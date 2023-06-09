// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

   //! Deploy detection-bot
   const funcSig="delegateTransfer(address,uint256,address)"
   const cryptoVault="0xFa9d112a28c258C0e51Ae57b25Fed6B2DA346f14"
   const fortaAddr="0x4C55AF6AD1b964afbF2948B19a237B359A4645c5"
  const Bot = await hre.ethers.getContractFactory("Bot");
  const bot = await Bot.deploy(cryptoVault,funcSig);
 await bot.deployed();
 console.log(
   `Bot deployed to ${bot.address}`
 );
 await bot.setForta(fortaAddr)
 const forta=await hre.ethers.getContractAt("Forta",fortaAddr)
 forta.setDetectionBot(bot.address)
 console.log(
   `---------------------------------------------------------`
 );

} 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

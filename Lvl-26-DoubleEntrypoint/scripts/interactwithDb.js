// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const cryptoAddr="0x86A2EE8FAf9A840F7a2c64CA3d51209F9A02081D"
    const legacyTokenAddr="0x4631BCAbD6dF18D94796344963cB60d44a4136b6"
    const dbEntryAddr="0xf953b3A269d80e3eB0F2947630Da976B896A8C5b"
    
    const DBentry=await hre.ethers.getContractAt("DoubleEntryPoint",dbEntryAddr)
    const CryptoVault=await hre.ethers.getContractAt("CryptoVault",cryptoAddr)
    const LegacyToken=await ethers.getContractAt("LegacyToken",legacyTokenAddr)
    await LegacyToken.delegateToNewContract(DBentry.address)
    
    await CryptoVault.sweepToken(legacyTokenAddr)


} 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
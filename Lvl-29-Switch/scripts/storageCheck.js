// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
/*   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001"); */
  const switchAddr="0x5FbDB2315678afecb367f032d93F642f64180aa3"
  const SlotCheckAddr="0x8A791620dd6260079BF849Dc5567aDC3F2FdC318"
  const slot="0x0"

  
  const slotValue = await hre.ethers.provider.getStorageAt(switchAddr,slot);
  const slotValue2 = await hre.ethers.provider.getStorageAt(SlotCheckAddr,slot);
  
   console.log(`Switch contract's slot ${slot}:${slotValue}`)
   console.log(`SlotCheck contract's slot ${slot}:${slotValue2}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

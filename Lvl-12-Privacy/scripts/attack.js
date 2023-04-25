// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
//key="0xc852a291dcfb8744012b9e035f324ae23352a2af35a732a94dfb1f9f45a7c052" 
//this key comes from storage location of 0x5
async function main() {
  const PrivacyAddress="0xE2E7cc8e1981A27C9461b5682a484cDF80c36569"
  const attackAddr="0xbf53975d003F7479aFD7C360eB406eD78F70b84a"

  const Privacy = await hre.ethers.getContractAt("Privacy",PrivacyAddress)
  //const Attack=await hre.ethers.getContractAt("attack",attackAddr)
  const Locked= await Privacy.locked()
  
  //await Attack.attackOn();  
  // const state=await hre.ethers.provider.getStorageAt(PrivacyAddress,"0x5")
  
  console.log(
  `Locked state is currently ${Locked}` 
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

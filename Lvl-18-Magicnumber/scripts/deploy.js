// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require("dotenv").config();
async function main() {
        
  
  const wallet=new hre.ethers.Wallet(process.env.PRIVATE_KEY_SEPOLIA)
  const provider=hre.ethers.getDefaultProvider(process.env.ALCHEMY_SEPOLIA_URL)
  const connectedWallet=wallet.connect(provider)
  const byteCodeWmetadata="0x600a600c600039600a6000f3"+"602a60005260206000f3"
               //! This is init-code--/^                 /^
                              //! This is runtime-code--/
   //!This commented code used to remove meta data from contract...                           
  //const byteCode=byteCodeWmetadata.substring(0,(byteCodeWmetadata).length-106)
  //console.log(byteCode)
  const transaction={ 
  data:byteCodeWmetadata
}
  const deployment=await connectedWallet.sendTransaction(transaction)
  // Wait for the transaction to be mined and get the deployed address
  const receipt = await deployment.wait();
  const contractAddress =  receipt.contractAddress;
  console.log("Contract deployed at:", contractAddress);

} 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

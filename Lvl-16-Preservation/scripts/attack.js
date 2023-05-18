// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
const attackAddr="0x7f353B91F0ABD2359fda3a53C199B9fc6d80fB63"
const Attack=await hre.ethers.getContractAt("Attack",attackAddr);
  const preservationAddr="0x6F5A659F5479246a19C4859EC297652551202DB4";
  const Preservation= await hre.ethers.getContractAt("Preservation",preservationAddr);
  await Preservation.setFirstTime(1);
 // await Attack.attack();
}
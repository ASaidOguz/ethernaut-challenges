async function main() {
 
    const attackAddr="0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"

    const Attack = await hre.ethers.getContractAt("Attack",attackAddr);
    await Attack.attack();
  
    console.log(
      ` Gatekeeperone deployed to ${gatekeeper.address}`
    );
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
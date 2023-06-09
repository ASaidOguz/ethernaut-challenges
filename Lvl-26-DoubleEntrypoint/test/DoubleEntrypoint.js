const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("DoubleEntryPoint", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployTokensFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
  //! Deploy forta...
  const Forta=await hre.ethers.getContractFactory("Forta")
  const forta=await Forta.deploy()
  await forta.deployed()
  console.log(
    `Forta deployed to ${forta.address}`
  );

  //! Deploy LegacyToken...
  const LegacyToken=await hre.ethers.getContractFactory("LegacyToken")
  const legacyToken= await LegacyToken.deploy()
  await legacyToken.deployed()
  console.log(
    `LegacyToken deployed to ${legacyToken.address}`
  );
  console.log(
    `---------------------------------------------------------`
  );
  //! Deploy cryptoVault  
  const CryptoVault=await hre.ethers.getContractFactory("CryptoVault")
  const cryptoVault= await CryptoVault.deploy(legacyToken.address)
  await cryptoVault.deployed()
  console.log(
    `CryptoVault deployed to ${cryptoVault.address}`
  );
  console.log(
    `---------------------------------------------------------`
  );
  //! Mint 100 legacy token for CryptoVault...
  const tokenValue=hre.ethers.utils.parseEther("100")
  await legacyToken.mint(cryptoVault.address,tokenValue)
  console.log("100 LegacyToken minted for cryptovault!!!")
  console.log(
    `---------------------------------------------------------`
  );
  //! Deploy DoubleEntrypoint...
  const playerAddr="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  const DoubleEntrypoint=await hre.ethers.getContractFactory("DoubleEntryPoint")
  const doubleEntryPoint=await DoubleEntrypoint.deploy(legacyToken.address,cryptoVault.address,forta.address,playerAddr)
  await doubleEntryPoint.deployed()
  console.log(
    `DoubleentryPoint deployed to ${doubleEntryPoint.address}`
  );
  console.log(
    `---------------------------------------------------------`
  );
   //! Deploy detection-bot
   const funcSig="delegateTransfer(address,uint256,address)"
  
  const Bot = await hre.ethers.getContractFactory("Bot");
  const bot = await Bot.deploy(cryptoVault.address,funcSig);
 await bot.deployed();
 console.log(
   `Bot deployed to ${bot.address}`
 );
 console.log(
   `---------------------------------------------------------`
 );
   //! Forta and Detection-Bot INITIATED!!!
   await forta.setDetectionBot(bot.address)
   await bot.setForta(forta.address)
   console.log("Forta and Detection-Bot INITIATED!!!")
   console.log(
     `---------------------------------------------------------`
   );
  
    return { doubleEntryPoint,bot,forta,legacyToken,cryptoVault,owner };
  }

  describe("CyrptoVault LegacyToken Bug", function () {
    it("Should try sweep the underlying token DET and revert!!!", async function () {
      const { doubleEntryPoint,bot,forta,legacyToken,cryptoVault,owner } = await loadFixture(deployTokensFixture);
      await legacyToken.delegateToNewContract(doubleEntryPoint.address)
      await expect(cryptoVault.sweepToken(legacyToken.address)).to.be.revertedWith("Alert has been triggered, reverting");
    });
  });
});

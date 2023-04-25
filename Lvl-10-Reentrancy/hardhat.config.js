require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey:{goerli:process.env.ETHERSCAN_API_KEY}
   }
};

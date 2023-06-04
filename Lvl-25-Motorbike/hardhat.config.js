require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.12",
  optimizer: {
    enabled: false,
    runs: 1000,
  },
  networks: {
    localhost: {
      url: "http://localhost:8545", // Use the default Hardhat local node URL
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia:{
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts:[process.env.PRIVATE_KEY_SEPOLIA]
    }
  },
  etherscan:{
    apiKey:{sepolia:process.env.ETHERSCAN_API_KEY}
   }
};
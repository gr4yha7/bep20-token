import "@nomiclabs/hardhat-waffle";
import { task } from "hardhat/config"
import {config} from "dotenv";
config();

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const {MNEMONIC} = process.env;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.6.4"
      },
      {
        version: "0.7.0"
      },
      {
        version: "0.8.0"
      }
    ]
  },
  defaultNetwork: "bscTestnet",
  networks: {
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      from: "0x306eC09c6585586974d2274bd4B505653Eb18443",
      accounts: {
        mnemonic: MNEMONIC
      },
    },
    bscMainnet: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56
    }
  }
};
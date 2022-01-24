require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/RISuipbB547IXA3IYW7hhKjq8fArDKyW',
      accounts: ['7584e02ced150b9c7d1b521f2218ccaabae4d76825cb3626627a947a622b08dc']
    }
  }
};

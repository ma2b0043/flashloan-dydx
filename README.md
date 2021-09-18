# flashloan-dydx
This project contain smart contracts for taking flashloan from dydx and then using the loan to buy some token on uniswap

## Pre-requisites
**1:** Ganache-cli: 6.12.2 version

**2:** Truffle: 5.4.10 version

**3:** Npm: 7.21.0 version

**4:** (Recommneded) Ubuntu: 20.04

## How to run
Steps:

**1:** Use "truffle compile", to compile the contract, using your terminal

**2:** Use "source .env" to load the environment variables into your terminal

**3:** Use the following comman to fork the mainnet: "npx ganache-cli \
--fork https://mainnet.infura.io/v3/$INFURA_PROJECT \
--unlock $WETH_WHALE \
--unlock $DAI_WHALE \
--unlock $USDC_WHALE \
--unlock $USDT_WHALE \
--unlock $WBTC_WHALE \
--networkId 1". You can use any networkId because I have set the networkId to any, for ease of use

**4:** Once step 3's command is working, open another terminal and enter this command to run the test for this smart contract: "env $(cat .env) npx truffle test --network mainnet_fork test/test-dydx-solo-margin.js"

**5:** Once step 4 has worked, you may see the following output:

![Screenshot from 2021-09-18 05-50-49](https://user-images.githubusercontent.com/60430226/133891283-fb384ea4-b8ed-44e1-97d2-06bbda79743a.png)

solo balance: balance of solo contract(is subject to change)

bal: (balance of contract when we flashloan is called)

repay: (balance to be repaid for flashloan)

bal - repay: (balance of contract once the flashloan has been paid off)

**6:** (optional step) you may call the functions of the contract yourself, to test out the contract anyway you want, the code has been commented for this purpose

## Note
Kindly note that, this project was created by following a bunch of tutorials, seeing existing opensource project and reading the documentation of dydx and flashloan in general. So the work present in these files could be part one of some other projects that you might have seen or used somewhere else. If you need any or encounter any problem at any of given, kindly let me know and I'll help you out asap. 

Contact email: anas.azam40@gmail.com

 

# flashloan-dydx
This project contain smart contracts for taking flashloan from dydx and then using the loan to buy some token on uniswap

## How to run
Steps:

1: Use "truffle compile", to compile the contract, using your terminal

2: Use "source .env" to load the environment variables into your terminal

3: Use the following comman to fork the mainnet: "npx ganache-cli --fork https://mainnet.infura.io/v3/$INFURA_PROJECT --unlock $WETH_WHALE --unlock $DAI_WHALE --unlock $USDC_WHALE --unlock $USDT_WHALE --unlock $WBTC_WHALE --networkId 1". You can use any networkId because I have set the networkId to any, for ease of use

4: Once step 3's command is working, open another terminal and enter this command to run the test for this smart contract: "npx truffle test test/test-dydx.js --network mainnet_fork"

5: Once step 4 has worked, you may see the following output:

solo balance: balance of solo contract(is subject to change)

bal: (balance of contract when we flashloan is called)

repay: (balance to be repaid for flashloan)

bal - repay: (balance of contract once the flashloan has been paid off)

6: (optional step) you may call the functions of the contract yourself, to test out the contract anyway you want, the code has been commented for this purpose

## Conclusion
If you need any or encounter any problem at any of given, kindly let me know and I'll help you out asap. 

Contact email: anas.azam40@gmail.com

 

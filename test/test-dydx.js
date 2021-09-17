const { ethers } = require("ethers");
const { sendEther } = require("./util")
const { DAI, DAI_WHALE, USDC, USDC_WHALE, USDT, USDT_WHALE } = require("./config")

const IERC20 = artifacts.require("IERC20")
const ERC20 = artifacts.require("ERC20")
const testDyDx = artifacts.require("testDyDx")

const SOLO = "0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e"

contract("testDyDx", (accounts) => {
  const WHALE = USDT_WHALE
  const TOKEN = USDT
  const DECIMALS = 6
  const FUND_AMOUNT = ethers.utils.parseEther("20")
  const BORROW_AMOUNT = ethers.utils.parseEther("10")

  let testDyDx
  let token
  /*module.exports = function (deployer) {
    deployer.deploy(testDyDx);
  };
  */
  beforeEach(async () => {
    module.exports = function (deployer) {
      deployer.deploy(testDyDx);
    };
    testDyDx = await testDyDx
    token = await ERC20.at(TOKEN)
    //testDyDx = await testDyDx.new()

    await sendEther(web3, accounts[0], WHALE, 1)

    // send enough token to cover fee
    const bal = await token.balanceOf(WHALE)
    assert(bal.gte(FUND_AMOUNT), "balance < fund")
    await token.transfer(testDyDx.address, FUND_AMOUNT, {
      from: WHALE,
    })

    const soloBal = await token.balanceOf(SOLO)
    console.log(`solo balance: ${soloBal}`)
    assert(soloBal.gte(BORROW_AMOUNT), "solo < borrow")
  })

  it("flash loan", async () => {
    const tx = await testDyDx.initiateFlashLoan(token.address, BORROW_AMOUNT, {
      from: WHALE,
    })

    console.log(`${await testDyDx.flashUser()}`)

    for (const log of tx.logs) {
      console.log(log.args.message, log.args.val.toString())
    }
  })
})

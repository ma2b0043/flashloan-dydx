function sendEther(web3, from, to, amount) {
  return web3.eth.sendTransaction({
    from,
    to,
    value: web3.utils.toWei(amount.toString(), "ether"),
  });
}

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

module.exports = {
  sendEther,
  ZERO_ADDRESS,
};

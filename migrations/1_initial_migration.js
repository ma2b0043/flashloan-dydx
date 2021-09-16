const testDyDx = artifacts.require("testDyDx");

module.exports = function (deployer) {
  deployer.deploy(testDyDx);
};

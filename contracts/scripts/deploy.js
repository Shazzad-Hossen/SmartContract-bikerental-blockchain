
const hre = require("hardhat");

async function main() {
 

  const bikeChain = await hre.ethers.deployContract("BikeChain");

  await bikeChain.waitForDeployment();

  console.log(
    `Deployed address of Bike Chain is : ${bikeChain}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

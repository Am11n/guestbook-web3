import hre from "hardhat";

async function main() {
  // Using type assertion to tell TypeScript that ethers exists on hre
  const { ethers } = hre as any;
  
  const GuestBook = await ethers.getContractFactory("GuestBook");
  const guestBook = await GuestBook.deploy();

  await guestBook.waitForDeployment();

  console.log(`GuestBook deployed to ${await guestBook.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
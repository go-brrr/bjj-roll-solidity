const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const bjjRollContractFactory = await hre.ethers.getContractFactory("BjjRoll");
  const bjjRollContract = await bjjRollContractFactory.deploy();
  await bjjRollContract.deployed();

  console.log("Contract deployed to:", bjjRollContract.address);
  console.log("Contract deployed by:", owner.address);

  // initialize the attack count and set it to number of attacks
  let attackCount;
  attackCount = await bjjRollContract.getTotalAttacks();

  // initiate an attack by calling the function on the contract
  let attackTxn = await bjjRollContract.attack();
  await attackTxn.wait();

  // set the attack count to the new number of total attacks
  attackCount = await bjjRollContract.getTotalAttacks();
};

const runMain = async () => {
  try {
    await main();

    // exit without error
    process.exit(0);
  } catch (error) {
    console.log(error);

    // exit Node process while indicating 'Uncaught Fatal Exception' error
    process.exit(1);
  }
};

runMain();

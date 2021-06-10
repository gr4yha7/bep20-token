import { ethers } from "hardhat";
import { BigNumber, Contract, Signer, utils } from "ethers";
import { expect } from "chai"

let bep20Token: Contract;
let Levi: Signer, Jaegar: Signer;
let totalSupply: BigNumber;
const amount = utils.formatUnits(1000, "wei");

const init = async function() {
  const contractFactory = await ethers.getContractFactory("Bep20Token");
  bep20Token = await contractFactory.deploy();
  totalSupply = await bep20Token.totalSupply();
  await bep20Token.deployed();
  [Levi, Jaegar] = await ethers.getSigners();
}

describe("Bep20Token", function () {
  beforeEach(async function (done) {
    await init();
    done();
  })

  it("checks total supply", async function () {
    const arg = "100000000000000000000000000000000"
    expect(totalSupply).to.equal(arg);
  })
})
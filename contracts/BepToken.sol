// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract Bep20Token is ERC20 {
  using SafeMath for uint256;
  using Address for address;

  constructor() ERC20("Beibs", "BEIB") {
    address owner = msg.sender;
    uint totalSupply = 1e32;
    _mint(owner, totalSupply);
  }

  modifier isValidAddress(address addr) {
    uint size;
    assembly {
      size := extcodesize(addr)
    }
    require(size == 0); // contract address check
    require(addr != address(0x0)); // zero address check
    require(addr != address(this)); // self contract address check
    _;
  }

  function refund(uint price) public payable {
    uint256 amountPaid = msg.value;
    address payable buyer = payable(msg.sender);
    if (amountPaid > price) {
      uint256 refundAmount = amountPaid.sub(price);
      // solhint-disable-next-line
      buyer.sendValue(refundAmount);
    }
  }

}
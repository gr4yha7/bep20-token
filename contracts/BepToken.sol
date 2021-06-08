// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Bep20Token is ERC20 {
  string private constant name = "Beibs";
  string private constant symbol = "BEIB";
  
  constructor() ERC20(name, symbol) {
    address owner = msg.sender;
    uint totalSupply = 1e32;
    _mint(owner, totalSupply);
  }

  modifier isValidAddress(address addr) {
    uint code;
    assembly {
      code := extcodesize(addr)
    }
    require(code == 0); // contract address check
    require(addr != address(0x0)); // zero address check
    require(addr != address(this)); // self contract address check
    _;
  }

}
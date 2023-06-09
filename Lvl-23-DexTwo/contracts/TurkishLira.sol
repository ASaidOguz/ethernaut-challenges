// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import"@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Turkishlira is ERC20 {
    constructor(uint256 initialSupply) ERC20("TurkishLira", "TL") {
        _mint(msg.sender, initialSupply);
    }
}
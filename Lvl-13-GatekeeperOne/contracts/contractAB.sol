// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract B {
   function returnSender() external view returns(address){
    return msg.sender;
   }
}

contract A is B {
  function special() external view returns(address){
    return this.returnSender();
   }
}
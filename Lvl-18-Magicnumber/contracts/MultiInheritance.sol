// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
contract A{
    function test() virtual public view  returns(uint){
        return 123;
    }
}

contract B{
    function test() virtual public view  returns(uint){
        return 456;
    }
}

contract C is A,B {
    function test()  override(A,B) public view returns(uint){
        return super.test();
    }
}

//! Important Info!!!
/* In Solidity, the external visibility specifier indicates that the function can only be called
from outside the contract. When you use external visibility for the test() function 
in contracts A and B, it means that the function can only be accessed 
externally, i.e., from other contracts or externally owned accounts (EOAs), 
but not from within the contract itself or its derived contracts.

In contract C, when you try to invoke super.test() with the external visibility specifier,
it becomes unknown because the external visibility does not allow internal calls to the function.
Since super.test() is called from within the contract itself, it cannot access the function with
external visibility. */
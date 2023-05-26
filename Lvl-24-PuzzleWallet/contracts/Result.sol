// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;
pragma experimental ABIEncoderV2;


contract Result {
   
    uint16 public rollNum=1;
    string public name="Hello";
    address public account=0x92e5c70Dd41824a0617e07271A7E1e81A9BcE064;
    string[5] public subjects=["one","two","three","four","five"];
    uint16 public totalMarks=32;
    bool public isPassed=true; // Combining totalMarks and isPassed

}


/* 
Slot 0: rollNum (2 bytes)
Slot 1: name (32 bytes, reference to string content)
Slot 2: account (20 bytes)
Slot 3-7: subjects[0] to subjects[4] (32 bytes each, references to string content)
Slot 8: totalMarks and isPassed (2 bytes for totalMarks + 1 byte for isPassed) 
*/

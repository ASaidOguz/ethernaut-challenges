// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SlotCheck {
struct Transaction{
address receiver;
uint8 id;
bool isApproved;
uint64 amount;
}
Transaction txStruct;
constructor(){
    txStruct.receiver=0x92e5c70Dd41824a0617e07271A7E1e81A9BcE064;
    txStruct.id=12;
    txStruct.isApproved=true;
    txStruct.amount=0.5 ether ;

}
function getStruct() public view returns(Transaction memory){
return txStruct;
}
}
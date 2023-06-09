// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface IForta {
    function setDetectionBot(address detectionBotAddress) external;
    function notify(address user, bytes calldata msgData) external;
    function raiseAlert(address user) external;
}
contract Bot {
   IForta public forta;
   bytes public callsign;
   address public monitoredSrc;
   function setForta(address _fortaAddr)external{
    forta=IForta(_fortaAddr);
   }
   constructor(address _monitoredSrc,string memory _callsign){
      monitoredSrc=_monitoredSrc;
      callsign=abi.encodeWithSignature(_callsign);

   }
   //! We need to notify alert when cryptovault bug initiated...
   function handleTransaction(address user, bytes calldata msgData) external {
      //console.logBytes(msgData);
    (address to, uint256 value,  address origSender)= abi.decode(msgData[4:],(address,uint256,address));
      bytes memory callSig = abi.encodePacked(msgData[0], msgData[1], msgData[2], msgData[3]);
    if(origSender==monitoredSrc&& keccak256(callsign)==keccak256(callSig)){
        IForta(msg.sender).raiseAlert(user);
    }
   

   }
}

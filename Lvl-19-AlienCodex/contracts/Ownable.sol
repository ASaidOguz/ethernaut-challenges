pragma solidity ^0.5.0;

contract Ownable {

  address public owner;

  event OwnershipTransferred(address previousOwner, address newOwner);

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function transferOwnership(address newOwner) onlyOwner public {
    emit OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

  function renounceOwnership() onlyOwner public {
    emit OwnershipTransferred(owner, address(0));
    owner = address(0);
  }

  function isOwner() public view returns (bool) {
    return msg.sender == owner;
  }

}
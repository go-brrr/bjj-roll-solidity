// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract BjjRoll {
    uint256 totalAttacks;

    constructor() {
        console.log("Hello from the BjjRoll constructor.");
    }

    function attack() public {
        totalAttacks += 1;
        console.log("%s has attacked.", msg.sender);
    }

    function getTotalAttacks() public view returns (uint256) {
        console.log("There have been %d total attacks.", totalAttacks);
        return totalAttacks;
    }
}

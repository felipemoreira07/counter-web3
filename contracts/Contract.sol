// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint256 private s_count; // Variável para armazenar o valor do contador

    // Incrementa o contador
    function increment() public {
        s_count += 1;
    }

    // Decrementa o contador
    function decrement() public {
        require(s_count > 0, "Count cannot be less than 0");
        s_count -= 1;
    }

    // Retorna o valor atual do contador
    function getCount() public view returns (uint256) {
        return s_count;
    }
}

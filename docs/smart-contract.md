Smart contract specification

Kontrakt: GuestBook.sol

Krav:

Lagrer en liste med entries

Hver entry:

address sender

string name

string message

uint256 timestamp

Funksjoner:

addEntry(string calldata name, string calldata message) (external)

getEntries() external view returns (Entry[] memory)

Event:

EntryAdded(address indexed sender, string name, string message, uint256 timestamp)

Forslag til implementasjon (bruk som utgangspunkt):

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract GuestBook {
    struct Entry {
        address sender;
        string name;
        string message;
        uint256 timestamp;
    }

    Entry[] public entries;

    event EntryAdded(address indexed sender, string name, string message, uint256 timestamp);

    function addEntry(string calldata name, string calldata message) external {
        entries.push(
            Entry({
                sender: msg.sender,
                name: name,
                message: message,
                timestamp: block.timestamp
            })
        );

        emit EntryAdded(msg.sender, name, message, block.timestamp);
    }

    function getEntries() external view returns (Entry[] memory) {
        return entries;
    }
}

pragma solidity ^0.4.18;

contract PersonDirectory {

    //  parameters
    mapping(address => Person) persons;
    uint personCount;

    //  events
    event PersonDirectory_PersonAdded(uint time, Person person);

    function PersonDirectory() public payable {

        //  effects
        personCount = 0;

        //  interactions
        PersonDirectory_Created(now, )
    }
}

contract Person {

    //  parameters
    uint time;
    address uportAddr;
    string publicKey;
    string name;
    string physicalAddr;

    //  events
    event PersonCreated(uint time, address indexed uportAddr, string publicKey, string name, string physicalAddr);

    function Person(address _uportAddr, string _publicKey, string _name, string _physicalAddr) public payable {

        //  conditions

        //  effects
        time = now;
        uportAddr = _uportAddr;
        publicKey = _publicKey;
        name = _name;
        physicalAddr = _physicalAddr;

        //  interactions

        //  events
        PersonCreated(time, uportAddr, publicKey, name, physicalAddr);
    }

}

contract Organization {

    //  parameters
    bytes32 id;
    string name;



}
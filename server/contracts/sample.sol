pragma solidity ^0.4.18;

contract Sample {
    uint time;
    string name;

    event SampleCreated(uint indexed time, string name);

    function Sample(string _name) public {
        time = now;
        name = _name;

        SampleCreated(time, name);
    }
}
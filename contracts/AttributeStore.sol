pragma solidity ^0.4.20;

library AttributeStore {
    struct Data {
        mapping(bytes32 => bytes32) store;
    }

    function getAttribute(Data storage self, bytes32 _UUID, string _attrName)
    public view returns (bytes32) {
        bytes32 key = keccak256(_UUID, _attrName);
        return self.store[key];
    }

    function setAttribute(Data storage self, bytes32 _UUID, string _attrName, bytes32 _attrVal)
    public {
        bytes32 key = keccak256(_UUID, _attrName);
        self.store[key] = _attrVal;
    }
}

const CryptoJS = require('crypto-js');

//  creates a merkle tree from an array of primitives
class MerkleTree {
    type = null;
    root = null;
    hashRecords = [];

    constructor(values = [], type = 'SHA256') {
        this.type = type;
        this.buildTree(values);
        //console.log('hash records', this.hashRecords);
    }

    createHash(data) {
        //console.log('making hash', data);
        return CryptoJS[this.type](data.toString()).toString();
    }

    buildTree(array) {
        if (array.length > 1) {
            let hashed = [];
            for (const ele of array) {
                hashed.push(this.createHash(ele));
            }
            this.root = this.process(hashed);
        } else if (array.length === 1) {
            this.root = this.createHash(array[0]);
        }
    }

    process(array) {
        let hashed = [];
        while (array.length > 0) {
            if (array.length > 1) {
                let hashA = array.shift();
                let hashB = array.shift();
                hashed.push(this.createHash(hashA + hashB));
            } else if (array.length === 1) {
                let lastHash = array.shift();
                hashed.push(this.createHash(lastHash + lastHash));
            }
        }
        this.hashRecords.push(hashed);
        if (hashed.length > 1) {
            return this.process(hashed.slice());
        } else if (hashed.length === 1) {
            return hashed[0];
        }
        return null;
    }
}

module.exports.MerkleTree = MerkleTree;
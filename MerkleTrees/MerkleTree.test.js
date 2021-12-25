const {MerkleTree} = require('./MerkleTree.js');

describe ('Constructs a merkle tree', () => {
    test ('Determine if hash works for a single value', () => {
        let tree = new MerkleTree();
        expect(tree.root).toBe(null);

        tree = new MerkleTree([1]);
        expect(tree.root)
            .toBe('6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b');
        expect(tree.createHash('1'))
            .toBe('6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b');

        tree = new MerkleTree(['Test string']);
        expect(tree.root)
            .toBe('a3e49d843df13c2e2a7786f6ecd7e0d184f45d718d1ac1a8a63e570466e489dd');
        expect(tree.createHash('Test string'))
            .toBe('a3e49d843df13c2e2a7786f6ecd7e0d184f45d718d1ac1a8a63e570466e489dd');

        tree = new MerkleTree([1], 'MD5');
        expect(tree.root).toBe('c4ca4238a0b923820dcc509a6f75849b');
        expect(tree.createHash('1')).toBe('c4ca4238a0b923820dcc509a6f75849b');

        tree = new MerkleTree(['Test string'], 'MD5');
        expect(tree.root).toBe('0fd3dbec9730101bff92acc820befc34');
        expect(tree.createHash('Test string')).toBe('0fd3dbec9730101bff92acc820befc34');
    });

    test ('Determine if hash works for a multiple values', () => {
        let tree = new MerkleTree([1,2]);
        expect(tree.root)
            .toBe('33b675636da5dcc86ec847b38c08fa49ff1cace9749931e0a5d4dfdbdedd808a');

        tree = new MerkleTree(['Test string','More']);
        expect(tree.root)
            .toBe('a84e8547891590b0b7a2ec14f27f584859f96054255b1ecc134143ab8dec7c2f');

        tree = new MerkleTree([1,2,3]);
        expect(tree.root)
            .toBe('f3f1917304e3af565b827d1baa9fac18d5b287ae97adda22dc51a0aef900b787');

        tree = new MerkleTree(['Test string','More','Stuff']);
        expect(tree.root)
            .toBe('dc4aab0853b6ad15862daf14e3f95708dc06e22d39dc341be2a5b65c856e0aa4');

        tree = new MerkleTree([1,2,3,4,5,6,7]);
        expect(tree.root)
            .toBe('99b80facafca5b81e018de3ea24c2bc6eec81ff21fbf358b512f3df8b862199b');

        tree = new MerkleTree(['Test string','More','Stuff',44,55,66,77]);
        expect(tree.root)
            .toBe('d8fac01434262e90bcd620818e14574dc558e5073655bb722e41ccc88f4c1b88');

        tree = new MerkleTree(['Test string','More','Stuff',44,55,66,77,true,false,
            {test:'this'}]);
        expect(tree.root)
            .toBe('134269b272dd8cde8d33e0b00b922e29a6961f46aa75aac83bf323bd1aa9e4df');

        let numList = [];
        for (let i = 0; i < 9999; i++) {
            numList.push(i);
        }
        tree = new MerkleTree(numList);
        expect(tree.root)
            .toBe('8e5de0cb76eb9b7b420574765e9174d4fc209af474448edb733bb6cc8fc1096e');

        tree = new MerkleTree([1,2], 'MD5');
        expect(tree.root).toBe('302cbafc0dfbc97f30d576a6f394dad3');

        tree = new MerkleTree(['Test string','More'], 'MD5');
        expect(tree.root).toBe('e1bfa1951ca12b49e60324127951373a');

        tree = new MerkleTree([1,2,3], 'MD5');
        expect(tree.root).toBe('d37a60fb7556c542502509dfe4d93928');

        tree = new MerkleTree(['Test string','More','stuff'], 'MD5');
        expect(tree.root).toBe('8b8a56cc2e0c741c07712a76c7ccc553');

        tree = new MerkleTree([1,2,3,4,5,6,7], 'MD5');
        expect(tree.root).toBe('662d7787d650efad62a6eac2d9ce6dba');

        tree = new MerkleTree(['Test string','More','stuff',44,55,66,77], 'MD5');
        expect(tree.root).toBe('12a8ba3a5818a326661865d327edbb10');

        tree = new MerkleTree(['Test string','More','Stuff',44,55,66,77,true,false,
            {test:'this'}], 'MD5');
        expect(tree.root).toBe('acdcd1d30e3e8ca2b7cb0e554deb6156');

        tree = new MerkleTree(numList, 'MD5');
        expect(tree.root).toBe('744556995f960fddfe4303ab4175c601');
    });
})
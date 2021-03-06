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

    test ('Prove the merkle tree is created properly', () => {
        let tree1 = new MerkleTree([1]);
        expect(tree1.root)
            .toBe('6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b');

        let tree2 = new MerkleTree([2]);
        expect(tree2.root)
            .toBe('d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35');

        let tree1_2 = new MerkleTree([1,2]);
        let hash_1_2 = tree1_2.createHash(tree1.root + tree2.root);
        expect(hash_1_2).toBe(tree1_2.root);

        let tree3 = new MerkleTree([3]);
        expect(tree3.root)
            .toBe('4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce');

        let tree4 = new MerkleTree([4]);
        expect(tree4.root)
            .toBe('4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a');

        let tree3_4 = new MerkleTree([3,4]);
        let hash_3_4 = tree3_4.createHash(tree3.root + tree4.root);
        expect(hash_3_4).toBe(tree3_4.root);

        let tree5 = new MerkleTree([5]);
        expect(tree5.root)
            .toBe('ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d');
        
        let tree5_5 = new MerkleTree([5,5]);
        let hash_5_5 = tree5_5.createHash(tree5.root + tree5.root);
        expect(hash_5_5).toBe(tree5_5.root);

        //combine 1,2 3,4
        let tree1_2_3_4 = new MerkleTree([1,2,3,4]);
        let hash_1_2_3_4 = tree1_2_3_4.createHash(tree1_2.root + tree3_4.root);
        expect(hash_1_2_3_4).toBe(tree1_2_3_4.root);

        //combine 5,5 5,5
        let tree5_5_5_5 = new MerkleTree([5,5,5,5]);
        let hash_5_5_5_5 = tree5_5_5_5.createHash(tree5_5.root + tree5_5.root);
        expect(hash_5_5_5_5).toBe(tree5_5_5_5.root);

        // combine 1,2,3,4 and 5,5,5,5
        let tree1_2_3_4_5_5_5_5 = new MerkleTree([1,2,3,4,5,5,5,5]);
        let hash_1_2_3_4_5_5_5_5 = tree1_2_3_4_5_5_5_5.createHash(tree1_2_3_4.root + tree5_5_5_5.root);
        expect(hash_1_2_3_4_5_5_5_5).toBe(tree1_2_3_4_5_5_5_5.root);

        // proof for 1,2,3,4,5
        let tree1_2_3_4_5 = new MerkleTree([1,2,3,4,5]);
        expect(tree1_2_3_4_5.root).toBe(tree1_2_3_4_5_5_5_5.root);

        let treeA = new MerkleTree(['A']);
        expect(treeA.root)
            .toBe('559aead08264d5795d3909718cdd05abd49572e84fe55590eef31a88a08fdffd');

        let treeB = new MerkleTree(['B']);
        expect(treeB.root)
            .toBe('df7e70e5021544f4834bbee64a9e3789febc4be81470df629cad6ddb03320a5c');

        let treeA_B = new MerkleTree(['A', 'B']);
        expect(treeA_B.root)
            .toBe('b30ab174f7459cdd40a3acdf15d0c9444fec2adcfb9d579aa154c084885edd0a');

        let hash_A_B = treeA_B.createHash(treeA.root + treeB.root);
        expect(hash_A_B).toBe(treeA_B.root);

        let treeC = new MerkleTree(['C']);
        expect(treeC.root)
            .toBe('6b23c0d5f35d1b11f9b683f0b0a617355deb11277d91ae091d399c655b87940d');

        let treeD = new MerkleTree(['D']);
        expect(treeD.root)
            .toBe('3f39d5c348e5b79d06e842c114e6cc571583bbf44e4b0ebfda1a01ec05745d43');

        let treeC_D = new MerkleTree(['C', 'D']);
        let hash_C_D = treeC_D.createHash(treeC.root + treeD.root);
        expect(hash_C_D).toBe(treeC_D.root);

        let treeA_B_C_D = new MerkleTree(['A', 'B', 'C', 'D']);
        let hashA_B_C_D = treeA_B_C_D.createHash(treeA_B.root + treeC_D.root);
        expect(hashA_B_C_D).toBe(treeA_B_C_D.root);
    });
})
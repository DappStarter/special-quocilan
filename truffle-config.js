require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth shift pupil gloom enter blue tackle'; 
let testAccounts = [
"0xb8b5850a7b395c4a8989cddd1afcb239ded7d6b29958d5245cfb90e32ee7aed9",
"0x2973dd4fdb7dd8dc1ad80d876ed47e2dcabc747ce61ecb0062dd4097f1c23ff5",
"0xad3f9b1f6163c9f5a9f3b93a8106d342381b0419226438e94cca7ca530cc2210",
"0x2a4f0b53d16f6decfec324e2d753e4ef2cf6b34b2e2b4e8880afe3068d8d3c10",
"0x023ee56a27850be1a6abb196ccb9acefcab44e19e0afe4d6f58e3d4de188b7ff",
"0x74278bc34b11d0ad2cfa0365c552d5ad1830df9839dcb78cb9713f05e2ba99f3",
"0xafbccd45dbe418cd4762e9d3e3a4b9e2a0ee3619a9828cc6060f60bbb16a1f0c",
"0x79a35b2238a6944a6936e9d7bf109468c648e3690c73a0d1eb80586cd3234574",
"0xfcab0a7ac9f77e87a6d1a3f23ba2288fa60889462da8d7940038f9167b97b914",
"0x4e439f76aa079e6e3d3be41d7a0c36b25c688ac139740829bda01570d75bfe45"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

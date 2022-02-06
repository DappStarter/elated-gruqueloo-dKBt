require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift recipe six purchase install clock bridge task'; 
let testAccounts = [
"0x5a860a5491d1ddb4ec9fcf64488e3900349f111e581560a1c4e13bd5a121c0cf",
"0xff0da3ac10cab14a8a82b4164991ebc064397937d205ac9a0d0c2ce44ac57e47",
"0xbade1748e5734ac1ce2ca5c8c7da00b996ed2324db0965075c0cf54e3c46290e",
"0x11d3e485e41630fde61002e38593829cb74b19c1bbd0513fd6b35eb40cf89a6e",
"0xa551b72fe7a0cea351dcf4877fafa6d7f58aa4e7a2e882431869133a6f01b362",
"0xdadf26544152c70a115c6bfb2c6bf845595af8538a5019319709c39c15890661",
"0x735a81b60a9c4e32fb349682aa3c00175e15115dac6477404d47a418f76d653c",
"0x6716a98689d9d99127639e026797e68522382adf98f15f9ba74d8bdea0812c6f",
"0xd9a02a951a329cfd11105e7e5ff56b5b0cb1193689759df85263d5ec34246cae",
"0x700ee143c7fbb3bfc96f3332d5bb7fb62a0ca8bb140d9655ecbbba45a02b7d31"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


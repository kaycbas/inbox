const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'hood hazard another amazing liquid park anxiety action pioneer party side bind',
    'https://rinkeby.infura.io/v3/c95be3e0f64b4ebf9c3fd60180437466'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);
    
    // result will be an instance of the contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
}

deploy();

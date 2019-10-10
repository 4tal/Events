require('dotenv').config({path:__dirname+"/.env"});

var Web3 = require('web3');
const { request } = require('graphql-request');

const abi  = require(process.env.ABI_JSON_PATH);

var web3 = new Web3(process.env.DEV_RPC);

console.log(web3);

let eventsSource = new web3.eth.Contract(abi,Web3.utils.toChecksumAddress(process.env.CONTRACT_ADDRESS));

// eventsSource.getPastEvents({fromBlock: '3000000', toBlock: 'latest'});
eventsSource.getPastEvents('allEvents', {
// Using an array means OR: e.g. 20 or 23
    fromBlock: 6000000,
    toBlock: 'latest'
})
.then(function(events){
    let getEventsOccurences = events.filter(event => event.event === process.env.EVENT_NAME); // same results as the optional callback above
    let tempHolder = events.map(event => console.log(`Event: ${event.event} on block ${event.blockNumber}, tx_hash:${event.transactionHash}.`));
})
.catch((err)=>{
    console.log(err)
});
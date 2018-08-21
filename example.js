const HttpProvider = require('ethjs-provider-http');
// const createInfuraProvider = require('irc-json-rpc-infura/src/createProvider');
const PollingBlockTracker = require('./src/polling');

const provider = new HttpProvider('http://localhost:8545');
const blockTracker = new PollingBlockTracker({provider});

blockTracker.on('latest', console.log);

blockTracker.on('sync', ({newBlock, oldBlock}) => {
  if (oldBlock) {
    console.log(`sync #${Number(oldBlock)} -> #${Number(newBlock)}`);
  } else {
    console.log(`first sync #${Number(newBlock)}`);
  }
});

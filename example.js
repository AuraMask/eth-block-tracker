const createInfuraProvider = require('irc-json-rpc-infura/src/createProvider');
const PollingBlockTracker = require('./src/polling');

const infuraProvider = createInfuraProvider({
  network: 'localhost',
});
const blockTracker = new PollingBlockTracker({
  provider: infuraProvider,
});

blockTracker.on('latest', console.log);

blockTracker.on('sync', ({newBlock, oldBlock}) => {
  if (oldBlock) {
    console.log(`sync #${Number(oldBlock)} -> #${Number(newBlock)}`);
  } else {
    console.log(`first sync #${Number(newBlock)}`);
  }
});

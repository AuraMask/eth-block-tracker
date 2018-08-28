const test = require('tape');
const SourceBaseBlockTracker = require('../src/base');
const DistBaseBlockTracker = require('../dist/BaseBlockTracker');
const runBaseTests = require('./base');

runBaseTests(test, 'source - BaseBlockTracker', SourceBaseBlockTracker);
runBaseTests(test, 'dist - BaseBlockTracker', DistBaseBlockTracker);

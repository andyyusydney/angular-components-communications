// load all js sources
const testsContext = require.context('./form', true, /\.js$/);
testsContext.keys().forEach(testsContext);

const connect = require('./client');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  })
  return stdin;
}

const handleUserInput = (data) => {
    if(data === '\u0003'){
      process.exit();
    }
};


console.log('Connecting ...');
connect();
setupInput();
// handleUserInput(setupInput());

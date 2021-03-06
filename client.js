const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says:', data);
  });
  
  conn.on('connect', () => {
    conn.write('Name: UwU')
    console.log('Successfull connected to game server');
  });

  return conn;
}

module.exports = connect;
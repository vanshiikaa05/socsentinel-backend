const { Server } = require('socket.io');

let io;

module.exports = function initSocket(server) {
  io = new Server(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket) => {
    console.log('SOC client connected');

    socket.on('join-lab', (labId) => {
      socket.join(labId);
    });
  });
};

module.exports.emitEvent = function (labId, data) {
  if (io) {
    io.to(labId.toString()).emit('soc-event', data);
  }
};

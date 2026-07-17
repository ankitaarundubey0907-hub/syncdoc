exports.joinRoom = (socket, documentId) => {

    socket.join(documentId);

    console.log(`${socket.id} joined ${documentId}`);

};

exports.leaveRoom = (socket, documentId) => {

    socket.leave(documentId);

    console.log(`${socket.id} left ${documentId}`);

};
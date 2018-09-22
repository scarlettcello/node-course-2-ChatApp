var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     text: 'Hey. This is Andrew'
    // });

    socket.emit('createMessage', {
        from: 'Andrew',
        text: 'Yes, that works for me.'
    })
});

socket.on('disconnect', function () {
    console.log('Disconected from server');
});

// socket.on('newEmail', function (email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function (message) {
    console.log('New message', message);
});

var socket = io(window.location.origin);

whiteboard.on('draw', function (start, end, color) {
    console.log(start, end, color);
    socket.emit('afterdraw', {start: start, end: end, strokeColor: color});
});

socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});

socket.on('drawdata', function (data) {
    whiteboard.draw(data.start, data.end, data.strokeColor);
});
import path from 'path';
import Express from 'express';
import Socket from 'socket.io';

var app = Express();
var server,
    io;

const PATH_STYLES = path.resolve(__dirname, '../client/css');
const PATH_DIST = path.resolve(__dirname, '../../dist');

app.use('/css', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;

    console.log('Server is listening at %s', port);
});

io = Socket(server);

io.on('connection', function (socket) {
    console.log('new connection.');

    var state = {
      items: [{
        name: 'AXJO',
        price: 5122.60
      }, {
        name: 'AORD',
        price: 5181.10
      }, {
        name: 'AAPL',
        price: 116.12
      }, {
        name: 'GOOG',
        price: 735.40
      }, {
        name: 'YHOO',
        price: 33.38
      }]
    };

    setInterval(function () {
        socket.emit('stock', state.items);
    }, 1000);
});
const {Producer, Consumer} = require('kafka-node');
const {client} = require('./client');

const producer = new Producer(client);
const consumer = new Consumer(client, [{topic: 'topic2', offset: 0}]); // cursor = 2
// ['topic1', 'topic2']
// listen to topic1, listen to topic2
consumer.on('message', function (message) {
    console.log("message", message);
});

consumer.on('error', function (err) {
    console.error(err);
})

// 01, 02, 03, 04
// 03, 04
// {}, {}, {}, {}
const produce = () => {
    const payloads = [
        {
            topic: 'topic1',
            messages: ['HEY'], // multi messages should be a array, single message can be just a string or a KeyedMessage instance
            key: 'blabla124', // string or buffer, only needed when using keyed partitioner
        }
    ]

    producer.on('ready', function () {
        producer.send(payloads, function (err, data) {
            console.log("data", data);
        });
    });
    
    producer.on('error', function (err) {
        console.error(err);
    })
}

produce();
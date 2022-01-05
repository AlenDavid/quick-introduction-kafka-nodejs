const kafka = require('kafka-node');
const client = new kafka.KafkaClient({
    requestTimeout: 1000,
    kafkaHost: '0.0.0.0:9093'
});

module.exports = {
    client
}
const { client } = require('./client')

const topicsToCreate = [{
    topic: 'topic1',
    partitions: 1,
    replicationFactor: 1,
},
{
    topic: 'topic2',
    partitions: 1,
    replicationFactor: 1,
}];

const createTopics = () => {
    client.createTopics(topicsToCreate, (error, result) => {
        // result is an array of any errors if a given topic could not be created
        if(error) {
            console.error(error);
        }

        console.log(result);
        client.close();
    });
}

module.exports = {
    createTopics
}
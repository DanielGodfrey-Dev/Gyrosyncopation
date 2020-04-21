const Node = require('../../database/schema.js');

exports.fetchNode = function(req, res) {

  let random = Math.floor(Math.random() * 7);
  
  Node.find((err, nodes) => {
    if (err) {
      throw new Error('oops something is wrong with controller db fetch...')
    }

    const node = nodes[random];

    const friendNode = {
        name: node.name,
        friendNodeProcessor: node.friendNodeProcessor,
        friendNodeRAM: node.friendNodeRAM,
        friendNodeQuantum: node.friendNodeQuantum
    }

    console.log(friendNode);
    res.send(friendNode);
  });
}
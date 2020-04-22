const Node = require('../../database/schema.js');

let count = 0;
let squad = [];

exports.fetchNode = function(req, res) {

  Node.find((err, nodes) => {
    if (err) {
      throw new Error('oops something is wrong with controller db fetch...')
    }

    let random = Math.floor(Math.random() * nodes.length);
    const node = nodes[random];

    const friendNode = {
        name: node.name,
        friendNodeProcessor: node.friendNodeProcessor,
        friendNodeRAM: node.friendNodeRAM,
        friendNodeQuantum: node.friendNodeQuantum
    }

    squad.push(friendNode);
    count++;

    console.log(count)
    console.log(squad);

    if (count < 5) {
    console.log(friendNode);
    res.send(friendNode);
    } else {
      let squadNode = squad[Math.floor(Math.random() * squad.length)]
      console.log(squad);
      res.send(squadNode);
    }
  });
}
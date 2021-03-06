// Note: Try to solve this task without using recursion
// Given a binary tree of integers t, return its node values in the following format:

// The first element should be the value of the tree root;
// The next elements should be the values of the nodes at height 1 (i.e. the root children), ordered from the leftmost to the rightmost one;
// The elements after that should be the values of the nodes at height 2 (i.e. the children of the nodes at height 1) ordered in the same way;

// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function traverseTree(t) {
    var result = [];
    var nodes = [];
    nodes.push(t);
    
    // BFS
    while(nodes.length > 0) {
        var node = nodes.shift();
        if(node !== null) {
            nodes.push(node.left);
            nodes.push(node.right);          
            result.push(node.value);
        }
    }
return result;
}

const tree = {
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": {
            "value": 5,
            "left": null,
            "right": null
        },
        "right": null
    }
}

console.log(traverseTree(tree));

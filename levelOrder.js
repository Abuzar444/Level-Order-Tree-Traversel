class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

var levelOrder = function (root) {

    let result = [];
    if (root == null) return result;
    let stack = [root];
    while (stack.length > 0) {
        let n = stack.length;
        let level = [];
        for (let i = 0; i < n; i++) {
            let node = stack.pop();
            level.push(node.val)
            if (node.left != null) stack.unshift(node.left);
            if (node.right != null) stack.unshift(node.right);
        }
        result.push(level)
    }
    return result;
};

console.log(levelOrder(a))
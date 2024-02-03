function solution(nodeinfo) {
  class BinaryTree {
    constructor(v, x) {
      this.v = v;
      this.x = x;
      this.left = null;
      this.right = null;
    }

    insert(v, x) {
      if (this.x >= x) {
        if (this.left) this.left.insert(v, x);
        else this.left = new BinaryTree(v, x);
      } else {
        if (this.right) this.right.insert(v, x);
        else this.right = new BinaryTree(v, x);
      }
    }
  }
  const preorder = (bTree, arr) => {
    if (bTree !== null) {
      arr.push(bTree.v);
      preorder(bTree.left, arr);
      preorder(bTree.right, arr);
    }
  };

  const postorder = (bTree, arr) => {
    if (bTree !== null) {
      postorder(bTree.left, arr);
      postorder(bTree.right, arr);
      arr.push(bTree.v);
    }
  };
  const preArr = [];
  const postArr = [];

  const nodes = nodeinfo
    .map((node, idx) => [idx + 1, ...node])
    .sort((a, b) => b[2] - a[2]);

  const Tree = new BinaryTree(...nodes[0]);
  for (let i = 1; i < nodes.length; i++) Tree.insert(...nodes[i]);

  preorder(Tree, preArr);
  postorder(Tree, postArr);

  return [preArr, postArr];
}

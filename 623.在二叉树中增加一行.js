/*
 * @lc app=leetcode.cn id=623 lang=javascript
 *
 * [623] 在二叉树中增加一行
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    if (depth === 1) {
        let newNode = new TreeNode(val);
        newNode.left = root;
        return newNode;
    }
    function traverse(node, level) {
        if (node === null) {
            return;
        }
        if (level === depth - 1) {
            let newLeft = new TreeNode(val);
            let newRight = new TreeNode(val);
            newLeft.left = node.left;
            newRight.right = node.right;
            node.left = newLeft;
            node.right = newRight;
        } else {
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        }
    }
    traverse(root, 1);
    return root;

};
// @lc code=end


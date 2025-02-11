/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    class TripleNode {
        constructor(row, col, root) {
            this.row = row;
            this.col = col;
            this.root = root;
        }
    }
    let arr = [];
    function traverse(root, row, col) {
        if (!root) {
            return;
        }
        arr.push(new TripleNode(row, col, root));
        traverse(root.left, row + 1, col - 1);
        traverse(root.right, row + 1, col + 1);
    }
    traverse(root, 0, 0);
    arr.sort((a, b) => {
        if (a.col !== b.col) {
            return a.col - b.col;
        } else if (a.row !== b.row) {
            return a.row - b.row;
        } else {
            return a.root.val - b.root.val;
        }
    });
    const res = [];
    let preCol = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        if (cur.col !== preCol) {
            res.push([]);
            preCol = cur.col;
        }
        res[res.length - 1].push(cur.root.val);
    }

    return res;
};
// @lc code=end


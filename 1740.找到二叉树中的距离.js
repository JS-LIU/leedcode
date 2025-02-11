/*
 * @lc app=leetcode.cn id=1740 lang=javascript
 *
 * [1740] 找到二叉树中的距离
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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function (root, p, q) {
    let res = 0;
    let found = false;
    function lca(node, p, q) {
        if(found){
            return Infinity;
        }
        if (!node) {
            return 0;
        }
        let left = lca(node.left, p, q);
        let right = lca(node.right, p, q);
        // 第一次遇上
        if (left === 0 && right === 0) {
            if (node.val === p || node.val === q) {
                return 1;
            }
            return 0;
        }
        if(left != 0 && right != 0 && !found){
            res = left + right;
            found = true;
            return Infinity;
        }
        let branch = left === 0 ? right : left;
        // 在同一棵树上
        if(node.val === p || node.val === q){
            res = branch;
        }
        return branch + 1;
    }
    lca(root, p, q);
    return res;
};
// @lc code=end


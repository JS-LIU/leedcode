/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    let res = [];
    function traverse(root, deepth) {
        if (!root) {
            return;
        }
        deepth++;
        if (res.length < deepth) {
            res.push(root.val);
        }
        traverse(root.right, deepth);
        traverse(root.left, deepth);
        deepth--;
    }
    traverse(root, 0);
    return res;
};
// @lc code=end


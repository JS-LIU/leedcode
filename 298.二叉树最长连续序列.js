/*
 * @lc app=leetcode.cn id=298 lang=javascript
 *
 * [298] 二叉树最长连续序列
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
 * @return {number}
 */
var longestConsecutive = function (root) {
    let res = 0;
    function traverse(node, parentVal, curlen) {
        if (!node) {
            return;
        }
        if (node.val === parentVal + 1) {
            curlen++;
        }else {
            curlen = 1;
        }
        res = Math.max(res, curlen);
        let pVal = node.val;
        traverse(node.left, pVal, curlen);
        traverse(node.right, pVal, curlen);
    }
    traverse(root, Infinity, 1);
    return res;
};
// @lc code=end


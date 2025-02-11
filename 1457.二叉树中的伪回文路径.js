/*
 * @lc app=leetcode.cn id=1457 lang=javascript
 *
 * [1457] 二叉树中的伪回文路径
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
var pseudoPalindromicPaths = function (root) {
    let res = 0;
    function traverse(node, memo) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            memo[node.val] = (memo[node.val] ? memo[node.val] + 1 : 1);
            let odd = 0;
            for (let key in memo) {
                if (memo[key] % 2 == 1) {
                    odd++;
                }
            }
            if (odd <= 1) {
                res++;
            }
            memo[node.val]--;
            return;
        }
        memo[node.val] = (memo[node.val] ? memo[node.val] + 1 : 1);
        traverse(node.left, memo);
        traverse(node.right, memo);
        memo[node.val]--;
    }
    traverse(root, {});
    return res;
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=971 lang=javascript
 *
 * [971] 翻转二叉树以匹配先序遍历
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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    let res = [];
    let canFlip = true;
    let i = 0;
    function traverse(root){
        if(!root || !canFlip){
            return;
        }
        if(root.val !== voyage[i++]){
            res = [-1];
            canFlip = false;
            return;
        }
        if(root.left && root.left.val !== voyage[i]){
            let temp = root.left;
            root.left = root.right;
            root.right = temp;
            res.push(root.val);
        }
        traverse(root.left);
        traverse(root.right);

    }
    traverse(root,0);
    return res;
};
// @lc code=end


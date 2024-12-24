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
var rightSideView = function(root) {
    let deepth = 0;
    let res = [];
    function tranverse(root,deepth){
        if(!root){
            return;
        }
        deepth++;
        if(res.length < deepth ){
            res.push(root.val);
        }
        tranverse(root.right,deepth);
        tranverse(root.left,deepth);
        deepth--;
    }
    tranverse(root,deepth);
    return res;
};
// @lc code=end


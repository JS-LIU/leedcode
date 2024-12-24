/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
    let res = 0;
    function tranverse(root, path) {
        if (!root) {
            return ;
        }
        let nowVal = root.val + '';
        path += nowVal;
        if (!root.left && !root.right) {
            res += parseInt(path);
            path = path.slice(0, -1);
            return ;
        }
        tranverse(root.left, path);
        tranverse(root.right, path);
        //  将path最后一个删掉
        path = path.slice(0, -1);
    }
    tranverse(root,"");
    return res;
};
// @lc code=end


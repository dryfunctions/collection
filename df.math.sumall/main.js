import _sum from "cflib/cf.finance.sum.js";
const main = function(items) {
    return items.reduce(_sum,0); 
};
console.log(main([1,2,3]));
export default main;


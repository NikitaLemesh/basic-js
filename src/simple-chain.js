const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chaingItemsArray: [],
  chain: "",
  getLength() {
    return this.chaingItemsArray.length;
  },
  addLink(value) {
    this.chaingItemsArray.length === 0 ? (this.chain = "") : this.chain;
    const arrayChain = this.chaingItemsArray;
    value !== undefined ? arrayChain.push(value) : arrayChain.push("( )");
    return this;
  },
  removeLink(position) {
    const arrayRes = [];
    for (let i = 0; i < this.chaingItemsArray.length; i++) {
      if (i + 1 === position) {
        this.chaingItemsArray.splice(i, 1);
        arrayRes.push(position);
      }
    }
    if(arrayRes.length === 0) {
      this.chaingItemsArray.length = 0;
      throw new Error(`You can't remove incorrect link!`);
    }
    return this;
  },
  reverseChain() {
    this.chaingItemsArray.reverse();
    return this;
  },
  finishChain() {
    for(let i = 0; i < this.chaingItemsArray.length; i++) {
      const lastItem = this.chaingItemsArray.length - 1;
      const item = this.chaingItemsArray[i];
      i === lastItem ? this.chain += `( ${item} )` : this.chain += `( ${item} )~~`
  }
  this.chaingItemsArray.length = 0;
  return this.chain;
  },
};

module.exports = {
  chainMaker,
};

const Steps = require('./Steps')

class Solution {
    constructor() {
      this.steps = [];
    }
  
    add_step(step) {
      this.steps.push(step);
    }
  
    get_steps() {
      return this.steps;
    }
  
    display() {
      // display the solution in a human-readable format
    }
}

module.exports = Solution
const algebra = require('algebra.js');
const Expression = algebra.Expression
const Eqn = algebra.Equation

class Equation {
  constructor(equationString) {
    this.equationString = equationString;
    this.steps = []
  }

  validateEquation() {
    this.equationString = this.equationString.replace(/\s/g, '')
    const pattern = /^(-?\d+)?\s*\*?\s*x\s*([+\-]\s*\d+)?\s*(=\s*(-?\d+))?\s*([+\-]\s*\d+)?\s*\*?\s*x?\s*([+\-]\s*\d+)?\s*$/;
    return pattern.test(this.equationString)
  }
  
  solve() {
    // Step 1: Simplify the expression
    let expression = algebra.parse(this.equationString);
    expression = new Expression(expression.toString())
    const simplifiedExpression = expression.simplify().toString();
    this.steps.push(`Simplify the expression: ${simplifiedExpression}`);
  
    // Step 2: Move all terms containing x to one side of the equation
    expression = expression.subtract(algebra.parse(this.equationString.split('=')[1]));
    const termsWithXOnOneSide = expression.toString();
    this.steps.push(`Move all terms containing x to one side of the equation: ${termsWithXOnOneSide}`)
  
    // Step 3: Simplify the expression
    expression = expression.simplify();
    const simplifiedTermsWithXOnOneSide = expression.toString();
    this.steps.push(`Simplify the expression: ${simplifiedTermsWithXOnOneSide}`);
    
    return this.steps
    // Step 4: Solve for x
    // const variables = expression.variables();
    // if (!variables.includes('x')) {
    //   throw new Error('Variable x does not exist in the equation');
    // }
    // console.log(expression.terms)
    // const x = algebra.parse('x');
    // const equation = new Eqn(expression, 0);
    // const solvedExpression = equation.solveFor(x).toString();
    // this.steps.push(`Solve for x: ${solvedExpression}`);
  
    // Step 5: Return the solution
    // return solvedExpression;
  }
  

}


module.exports = Equation
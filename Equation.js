const { Term, Operator }= require('./TermOperator')


class Equation {
    constructor(input_equation) {
        this.input_equation = input_equation;
        this.terms = [];
        this.operators = []
    }

    // validateEquation(equation) {
    //     // Remove all whitespace from the equation
    //     equation = equation.replace(/\s/g, '');
      
    //     // Check if the equation matches the pattern ax+b=c, where a, b, and c are numbers and x is a variable
    //     // var pattern = /^([-+]?[0-9]*\.?[0-9]*)?x([-+][0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*)$/;
    //     let pattern = /^([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?$|^([-+]?[0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?$/;
  
    //     return pattern.test(equation);
    // }
    // validateEquation(equation) {
        // Remove all whitespace from the equation
        // equation = equation.replace(/\s/g, '');
      
        // let pattern = /^([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?$|^([-+]?[0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?$/;
        // return pattern.test(equation);
        // let pattern = /^([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?=?([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?$|^([-+]?[0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?$/;
        // return pattern.test(equation);
        // let pattern = /^([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*x)?([-+][0-9]*\.?[0-9]*)?$/;
        // return pattern.test(equation);

        // var pattern = /^([-+]?[0-9]*\.?[0-9]*)?x([-+][0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*)$/;
        // return pattern.test(equation);
    // }

    // validateEquation(equation) {
    //     // Remove all whitespace from the equation
    //     equation = equation.replace(/\s/g, '');
       
    //     // var pattern = /^([-+]?[0-9]*\.?[0-9]*)?x([-+][0-9]*\.?[0-9]*)?=([-+]?[0-9]*\.?[0-9]*)$/;
        
    //     // let pattern = /^([-+])?(\d+)?x([-+]\d+)?=([-+])?(\d+)?x([-+]\d+)?$|^([-+])?(\d+)?x([-+]\d+)?=([-+])?(\d+)$/;

    //     // let pattern = /^([-+])?(\d+)?x?([-+]\d+)?=([-+])?(\d+)?x?([-+]\d+)?$/;

    //     // let pattern = /^([-+])?(\d+)?([*]?\(?x\)?)([-+]\d+)?=([-+])?(\d+)?([*]?\(?x\)?)([-+]\d+)?$/;

    //     let pattern = /^([-+])?(\d+)?([*]?\(?x\)?)([-+]\d+)?=([-+])?(\d+)?([*]?\(?x\)?)([-+]\d+)?$/;

    //     return pattern.test(equation);
    // }
    
    // isLinearEquation(equation) {
    //     // Remove all whitespace from the equation
    //     equation = equation.replace(/\s/g, '');
        
    //     // Split the equation into left and right sides
    //     const sides = equation.split('=');
    //     if (sides.length !== 2) {
    //       return false; // Invalid format
    //     }
        
    //     // Check the left side
    //     const leftSide = sides[0];
    //     if (!leftSide.includes('x')) {
    //       return false; // No x term
    //     }
    //     const leftTerms = leftSide.split(/[+-]/);
    //     if (leftTerms.length > 2) {
    //       return false; // Too many terms
    //     }
    //     if (leftTerms.some(term => term !== 'x' && isNaN(parseFloat(term)))) {
    //       return false; // Invalid coefficient
    //     }
        
    //     // Check the right side
    //     const rightSide = sides[1];
    //     const rightTerms = rightSide.split(/[+-]/);
    //     if (rightTerms.length > 2) {
    //       return false; // Too many terms
    //     }
    //     if (rightTerms.some(isNaN)) {
    //       return false; // Invalid constant
    //     }
        
    //     return true;
    // }

    // validateEquation(equation) {
    //     // Remove all whitespaces from the equation
    //     equation = equation.replace(/\s/g, '');
      
    //     // Split the equation into left and right hand sides using the '=' symbol
    //     const [leftSide, rightSide] = equation.split('=');
      
    //     // Check if the equation has a single equals sign
    //     if (equation.indexOf('=') !== equation.lastIndexOf('=')) {
    //       return false;
    //     }
      
    //     // Check if the equation has a variable with a coefficient on both sides
    //     if (/^[0-9]*[a-zA-Z][+-][0-9]*[a-zA-Z]/.test(leftSide) ||
    //         /^[0-9]*[a-zA-Z][+-][0-9]*[a-zA-Z]/.test(rightSide)) {
    //       return false;
    //     }
      
    //     // Check if the equation has a variable with a coefficient on one side only
    //     if (/^[0-9]*[a-zA-Z]|[a-zA-Z][0-9]*$/.test(leftSide) ||
    //         /^[0-9]*[a-zA-Z]|[a-zA-Z][0-9]*$/.test(rightSide)) {
    //       return true;
    //     }
      
    //     return false;
    // }

    validateEquation(equation) {
        try {
          const lhs = equation.split("=")[0];
          const rhs = equation.split("=")[1];
          const lhsTerms = lhs.split(/(?=[-+])/);
          const rhsTerms = rhs.split(/(?=[-+])/);
          const variables = [];
          const constantTerms = [];
      
          lhsTerms.concat(rhsTerms).forEach((term) => {
            if (term !== "=") {
              if (term.match(/[a-zA-Z]/)) {
                variables.push(term);
              } else {
                constantTerms.push(term);
              }
            }
          });
      
          if (variables.length === 1 && constantTerms.length === 2) {
            return true;
          } else {
            return false;
          }
        } catch (e) {
            console.log(e)
          return false;
        }
      }
      
      
      

    parseEquation() {
        // Extract the left and right sides of the equation
        const [leftSide, rightSide] = this.input_equation.split("=").map((side) => side.trim());
      
        // Split the left side into terms using the regex pattern
        const termPattern = /([-+]?\d*[a-z]?)\s*([*\/])?\s*/gi;
        let match;
        while ((match = termPattern.exec(leftSide))) {
          const [_, term, operator] = match;
          this.add_term(term);
          if (operator) {
            this.add_operator(operator);
          }
        }
      
        // Add the right side of the equation as a term with a coefficient of -1
        this.add_term(`-${rightSide}`);
    }
      
    
    add_term(term) {
        this.terms.push(term);
    }
    
    add_operator(operator) {
        this.operators.push(operator);
    }

    get_terms() {
        return this.terms;
    }

    get_operators() {
        return this.operators;
    }
}


module.exports = Equation
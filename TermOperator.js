class Term {
    constructor(coefficient, variable, constant){
        this.coefficient = coefficient;
        this.variable = variable;
        this.constant = constant;
    }
}

class Operator {
    constructor(value){
        this.value = value;
    }
}

module.exports = { Term, Operator }
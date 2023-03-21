const Equation = require('./Equation');
const { Term, Operator } = require('./TermOperator');
const Steps = require('./Steps')
const Solution = require('./Solution')

const STATES = {
    WAITING : 'waiting',
    IN_PROGRESS: 'in_progress',
    DONE: 'done'
}

class EquationSolverEvent {
    constructor({ data, eventName, message } ) {
        this.data = data;
        this.eventName = eventName;
        this.message = message;
    }
}

class EquationSolver {
    constructor({ io }){
        this.socket = io;
        this.equation = null;
        this.events = [];
        this.steps = [];
        this.terms = [];
        this.operators = [];
        this.solution = null;
        this.state = STATES.WAITING
    }

    createEquationSolverEvent({ message, data, eventName }) {
        const event = new EquationSolverEvent({ message, data, eventName })
        this.events.push(event);
        return event;
    }

    emitEvent(event) {
        this.socket.emit(event.eventName, event);
    }

    emitEquationSolverEvent({ message, data, eventName }) {
        const event = this.createEquationSolverEvent({ message, data, eventName });
        this.emitEvent(event)
    }

    getEquation({event}){
        const input_equation = event.equation
        // console.log(input_equation)
        const equation = new Equation(input_equation)
        const isValidEqn = equation.validateEquation(input_equation)
        console.log(isValidEqn)
    }    

    // getEquation(event) {
    //     if (!event) {
    //       console.error('Invalid event object');
    //       return;
    //     }
    //     console.log('input equation:', event);
    //     // const input_equation = event.event.input_equation?.trim();
    //     const input_equation = event?.input_equation?.trim();
    //     if (!input_equation) {
    //       console.error('Invalid input equation');
    //       return;
    //     }
      
    //     const equation = new Equation(input_equation);
    //     const isValidEqn = equation.validateEquation();
      
    //     if (!isValidEqn) {
    //       this.emitEquationSolverEvent({
    //         message: `Please enter a valid equation`,
    //         eventName: 'input_equation',
    //       });
    //       return;
    //     }
    // }
      

    

    join({event, socket}){
        this.emitEquationSolverEvent({
            message: `Hello ${event.data.name}. I'm foondamath👾. I'm here to help you understand and solve your equations. You can go ahead and type the equation you need help with`,
            eventName: 'join'
        })
    }


}



module.exports = EquationSolver
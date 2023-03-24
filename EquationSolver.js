const Equation = require('./Equation');
// const runPrompt = require('./openai');

class EquationSolverEvent {
    constructor({ data, eventName, message } ) {
        this.data = data;
        this.eventName = eventName;
        this.events = []
        this.message = message;
    }
}

class EquationSolver {
    constructor({ io }){
        this.socket = io;
        this.equation = null;
        this.steps = [];
        this.terms = [];
        this.events = [];
        // this.solution = null;
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

    async getEquation({event}){
        const input_equation = event.equation;
        const equation = new Equation(input_equation);
        const solution = await equation.solve()
        
        this.emitSolution(solution)
    }  
    
    emitSolution(solution) {
        this.emitEquationSolverEvent({
            message: `${solution}`,
            eventName: 'solution',
        })
    }

    join({event, socket}){
        this.emitEquationSolverEvent({
            message: `Hello ${event.data.name}. I'm foondamath. I'm here to help you understand and solve your equations. You can go ahead and type the equation you need help with`,
            eventName: 'join'
        })
    }


}



module.exports = EquationSolver
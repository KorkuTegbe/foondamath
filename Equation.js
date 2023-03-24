
require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);

class Equation {
  constructor(equationString) {
    this.equationString = equationString;
    this.steps = []
  }

  async solve(){
    const prompt = `Solve the following linear equation: ${this.equationString}. Show step-by-step instructions on how to solve the equation. The steps should be in a json format. If ${this.equationString} is not a valid equation, your response should be why it's not a valid equation. Only give an example of a valid equation if ${this.equationString} is not a valid equation. Don't add the steps to solving the example equation. `

    try{
      const response = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: prompt,
          max_tokens: 1500,
          temperature: 0.5,
      })
      const toDisplay = response.data.choices[0].text
      return toDisplay 
    }catch(err){
      return `We're having issues accessing the internet now. Come back in a while`;
    }
    
  }

}

module.exports = Equation


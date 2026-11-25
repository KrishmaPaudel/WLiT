//import the configuration we exported from assistant.js
import {ai, model, systemInstructions} from './assistant.js';

//Make API request
async function main() {
    const response= await ai.models.generateContent({
        model: model,
        contents: 'Who is krishma paudel',
        config:{
            // systemInstruction: systemInstructions,
            responseMimeType: 'application/json',
            
            //request JSON output
            responseSchema:{
                type:'OBJECT',
                properties:{
                    question:{
                        type: 'STRING'
                    },
                    answer:{
                        type: 'STRING'
                    }
                },
                required: ['question', 'answer']
            }
        }
    });
    
    //parse Gemini's JSON response
    const result=JSON.parse(response.text);

    //Display the response
    // console.log("Question",result.question);
    console.log("\nAnswer",result.answer);
    
}
main()
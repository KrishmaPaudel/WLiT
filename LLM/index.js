import 'dotenv/config'// so that we can use gemini api from .env file
import { GoogleGenAI } from '@google/genai'

//1/Initialize Gemini
const ai= new GoogleGenAI({
    apiKey: process.env.GEMINI_APP_KEY,
});

//2/ make our first apoi call
async function main(){
    let noOfMcq=5;
    let noOfOptions=4;
    let topic="AI/ML"
    const response= await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
    
        contents: `give me 5 ${noOfMcq} quiz questions related to ${topic} for a quiz competetion`,
        config:{
            systemInstructions: `You are a quiz generator. Create multiple choice questions . The questions should have ${noOfOptions} options. Also provide the answer. questions in 1,2,3... numbers and options in A,B,C,.... provide the answers of all the questions at the end of 5 questions together by specifying the question number`,
            responseMimeType: 'application/json',
            temperature: 2,
            responseSchema: {
                type: 'object',
                properties:{
                    questions:{
                        type: 'array',
                        items:{
                            type: 'object',
                            properties:{
                                question: {type: 'string'},
                                options: {type: 'array', items:{ type:'string'}},
                                correctAnswer: {type: 'string'},
                                difficulty: {type: 'string'},
                                hint: {type: 'string'}
                            },
                         required: ['question','options','correctAnswer','difficulty','hint']   
                        }
                    }
                }
            }
        },
        
        
    });

    // console.log("temperature: 2");
//3/ Display the response
    // console.log(response.text);
    
const quiz= JSON.parse(response.text)
quiz.questions.forEach((q,index)=>{
    console.log(`Question ${index +1}: ${q.question}`);
    q.options.forEach((option,i)=>{
        console.log(`Option ${String.fromCharCode(65+i)}: ${option}`);
    });
    console.log(`Correct Answer: ${q.correctAnswer}`);
console.log(`Difficulty: ${q.difficulty}`);
    
});


}
main()

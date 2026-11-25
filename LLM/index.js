import 'dotenv/config'// so that we can use gemini api from .env file
import { GoogleGenAI } from '@google/genai'
import fs from 'fs'
import { MIMEType } from 'util';

//1/Initialize Gemini
const ai= new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});


const noOfMcq=5;
let noOfOptions=4;
let topic="AI/ML"
const imagePath="C:/Tech/WLiT/LLM/images/note.jpg";
const imageData= fs.readFileSync(imagePath).toString('base64');

const responseSchema={
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
const prompt=[
        { text: `Attached is an image of a note. Generate ${noOfMcq} questions based on the image ` },
        {inlineData: {mimeType: 'image/jpg', data:imageData}}]

const configuration= {
            systemInstructions: `You are a quiz generator. Create multiple choice questions . The questions should have ${noOfOptions} options. Also provide the answer. questions in 1,2,3... numbers and options in A,B,C,.... provide the answers of all the questions at the end of 5 questions together by specifying the question number. Base every question only on the provided notes`,
            responseMimeType: 'application/json',
            temperature: 2,
            responseSchema: responseSchema
        }

//2/ make our first apoi call
async function main(){
    
    const response= await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
    
        contents: prompt,
        config: configuration
        }
        
        
    );
    

    // console.log("temperature: 2");
//3/ Display the response
    
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

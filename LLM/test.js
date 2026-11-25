import 'dotenv/config'// so that we can use gemini api from .env file
import { GoogleGenAI } from '@google/genai'
import fs from 'fs'
import { text } from 'stream/consumers';

const ai= new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// fs module reads the file
// Base64 is way to change the picture=> pixels=> RGBnumbers => string (image as text)
const imagePath="C:/Tech/WLiT/LLM/images/panda.jpg";
const imageData= fs.readFileSync(imagePath).toString('base64');
const prompt=[
    {text:`Describe the image in detail.`},
    {inlineData: {mimeType: 'image/jpg', data: imageData}}
];
const follow_up_request=["what color is it?"];

async function main(){
    const history=[]; // the whole conversation history starts empty
    history.push({role: 'user', parts: prompt});
    const response= await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: history
    });
    console.log(response.text);
    history.push({role:'model', parts:[{text: response.text}]});


    for (const follow_up of follow_up_request){
        history.push({role: 'user', parts:[{text: follow_up}]});
        const response2=await ai.models.generateContent({
            model: 'gemini-3.1-flash-lite',
            contents: history,
        });
        console.log(response2.text);
    
    history.push({role: 'model', parts:[{text: response2.text}]});
    }
    

    // console.log(response.text)
}
main();
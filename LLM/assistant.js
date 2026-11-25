import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

export const ai=new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

//specify the model
export const model='gemini-3.1-flash-lite'

//define system instructins
export const systemInstructions=`Explain accurately and clearly. Use simple language. Do not invent facts, statistics or references. If unsure, say no. Politely correct false premises. Ask for clarification when information is missing. Do not present guesses as fact. you are not a substitute for qualified professional advice.`;
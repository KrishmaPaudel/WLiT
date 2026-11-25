import {ai, model, systemInstructions} from './assistant.js';

//1/write the test cases to check
const testCases=[
    {
        question: 'What is 2+2',
        expected:'4'
    },
    {
        question: 'Who is the father of computer?',
        expected: 'babbage'
    },
    {
        question: 'what is the value of tan(90)?',
        expected: 'Undefined'
    },
    {
        question: 'what is laptop? in one sentence',
        expected: 'device' 
    }
];

//2/ Evaluate the assistant
async function evaluateAssistant(question) {
    const response= await ai.models.generateContent({
        model: model,
        contents: question,
        config:{
            systemInstruction: systemInstructions,
        },
    });
    return response.text;
}

//3/ run evaluation tests
async function runTests() {
    // initialize a counter called passed to keep track of how many tests the assistant passes.
    let passed=0;

    //Iterate through test cases
    for (const test of testCases){
        const response = await evaluateAssistant(test.question);
        const ok= response.toLowerCase().includes(test.expected.toLowerCase());
        console.log('\nQuestion:',test.question);
        console.log('Response:',response);
        console.log('Result:', ok?'Pass': 'Fail');
        if (ok) passed++;
    }

    //4/ Calculate pass rate
    console.log('\n----------');
    console.log(`passed: ${passed}/${testCases.length}`);
    console.log(`Pass rate: ${(passed/ testCases.length)* 100}%`);
}
runTests();


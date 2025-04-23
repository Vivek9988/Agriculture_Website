const express = require('express');
require('dotenv').config()
const { default: mongoose } = require('mongoose');
const userRoute = require('./routes/user')
const axios = require('axios');


//const urlRoute = require('./routes/user');

const app = express();
app.use(express.json());
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/vivek`)
        console.log("connected")

    } catch (error) {
        console.log("ERROR : ", error)

    }

})()

app.use('/api', userRoute)


const openaiAPIKey = process.env.OPENAI_API_KEY;

app.post('/api/chat', async (req, res) => {
    const userMessage = req.body.message;
    console.log(userMessage)

    try {

        //console.log("Using API Key:", openaiAPIKey);
console.log("Making OpenAI request with key:", openaiAPIKey?.slice(0, 5) + "...");

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "user", content: userMessage }
                ],
                max_tokens: 150,
            },
            {
                headers: {
                    'Authorization': `Bearer ${openaiAPIKey}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        console.log("OpenAI Response:", response.data);
        const chatbotResponse = response.data.choices[0].text.trim();
        res.json({ message: chatbotResponse });
        
    } catch (error) {
        // res.status(500).json({ error: 'Error in API request' });
        console.log("error" , error)
    }
});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
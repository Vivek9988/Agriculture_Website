const express = require('express');
require('dotenv').config()
const userRoute = require('./routes/user')
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');

//const urlRoute = require('./routes/user');

const app = express();

app.use(cors());




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

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo", // or "gpt-4" if you have access
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

        const chatbotResponse = response.data.choices[0].message.content.trim();
        res.json({ message: chatbotResponse });

    } catch (error) {
        console.error("Error during OpenAI API call:", error.response?.data || error.message);
        res.status(500).json({ error: 'Error in API request' });
    }
});



app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
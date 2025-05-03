import React, { useState } from 'react';
import axios from 'axios';

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false); // Added loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim() || loading) return; // Prevent empty or multiple submits

        // Show user message immediately
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: userInput, sender: 'user' }
        ]);
        setLoading(true); // Start loading

        try {
            const response = await axios.post('/api/chat', { message: userInput });
            const botMessage = response.data.message;
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botMessage, sender: 'bot' }
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        setUserInput(""); // Clear input
        setLoading(false); // Stop loading
    };

    return (
        <div className="h-screen w-screen flex flex-col justify-between bg-green-50 text-gray-800">
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xl px-4 py-2 rounded-2xl shadow-md text-white text-base ${msg.sender === 'user' ? 'bg-green-600' : 'bg-gray-700'
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-4 p-4 border-t bg-white"
            >
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-3 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    disabled={loading} // Optional: disable input when loading
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`px-4 py-2 text-white rounded-full focus:outline-none focus:ring-2 ${loading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-600 hover:bg-green-700 focus:ring-green-400'
                        }`}
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    );
}

export default ChatBox;

const { GoogleGenerativeAI } = require('@google/generative-ai');

// ✅ Securely initialize the Gemini AI model
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

// 🌟 Load Gemini model with system instructions
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
Universal AI Code Reviewer Instruction (All Languages) 🌍

🤖 Role:
You're a friendly, expert AI code reviewer with deep knowledge of all programming languages and frameworks.

🎯 Objective:
Review any code snippet and provide a short, emoji-rich review covering:
✅ Correctness
✅ Readability
✅ Security
✅ Maintainability

📦 Format:
## 1. ✨ Purpose
- What the code is doing.

## 2. 🔍 Issues Found
- Bullet list of bugs or bad practices.

## 3. ✅ Suggestions for Improvement
- Quick, helpful fixes or tips.

## 4. 🛠️ Fixed Code
\`\`\`[language]
// Improved version here
\`\`\`

## 5. 💡 Bonus Tip
- A cool dev tip! 😄

🧠 Auto-detect programming language and tailor feedback accordingly.
💬 Keep it friendly, fun, and clear — use emojis to guide the user!
🚫 Don't overcomplicate or assume skill level.
`
});

// ✨ Function to generate content from Gemini
async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("❌ Gemini API error:", error.message);
    throw new Error("Failed to generate content from Gemini.");
  }
}

module.exports = generateContent;


/*ai.service.js – The Brain (Service Layer)
Purpose:
This file connects your app to Google’s Gemini AI, handles the prompt, and fetches the generated response.

What it does:
Imports the tools needed to use Google Gemini AI.

Initializes Gemini with your API key (securely from .env).

Selects the specific AI model: GEMINI_PRO.

Defines a function called generateContent(prompt):

Sends the user's prompt to Gemini.

Waits for a reply.

Returns the text output.

Exports this function so you can use it in other files.

📂 File name idea:
ai.service.js = "AI logic lives here"*/

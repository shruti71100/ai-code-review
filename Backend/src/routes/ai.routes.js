const express=require('express');
const aiController=require("../Controllers/ai.controllers")
const router=express.Router();

router.post("/get-review",aiController.getReview);
module.exports=router;

/*ai.routes.js – The Door (Routes Layer)
Purpose:
This file handles HTTP requests from users (like a browser or frontend app), checks the input, and sends back AI-generated replies.

What it does:
Creates a GET route at /get-response.

Accepts a prompt through the URL (like ?prompt=hello).

Checks if the prompt is missing:

If yes: responds with error 400 - prompt is required.

If the prompt is valid:

Sends it to generateContent() from the service file.

Waits for the AI to reply.

Sends that reply back to the user.

Exports the router to plug into your main server.

📂 File name idea:
ai.routes.js = "API endpoint that connects user to the AI brain"

User makes a request ➡️ ai.routes.js handles it ➡️ ai.service.js talks to Gemini ➡️ response sent back
User → ai.routes.js → calls → ai.service.js → talks to Gemini AI → gives response → back to ai.routes.js → back to User*/


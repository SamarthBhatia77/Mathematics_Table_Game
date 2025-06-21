# Mathematics_Table_Game
This is a fun and interactive math table game that tests the user’s multiplication skills across three difficulty levels — Easy, Medium, and Hard. The goal is to answer as many multiplication questions correctly as possible. The game keeps track of your current score and updates your all-time high score using the browser's localStorage.

# Gameplay Overview
-> Easy: Tables from 1 to 10
-> Medium: Tables from 10 to 20 
-> Difficult: Tables from 20 to 30

The game dynamically generates questions, checks your answers, and immediately updates your score. When a wrong answer is given, the game ends and presents you with options to retry or select a new difficulty.

# JavaScript Features used

-> Local Storage
To store and retrieve the all-time high score across sessions.

-> DOM Manipulation
Dynamically updating HTML elements like questions, input fields, score displays, and buttons in response to user interactions.

-> Event Handling
Using onclick and onkeydown events to trigger functions, handle form submissions with the Enter key, and reload the page.

-> Dynamic Element Rendering
HTML content is injected using innerHTML and automatically focuses input fields to improve user experience.

-> Random Number Generation
Questions are randomly generated each time using Math.random() and Math.floor().

-> Input Validation and Type Conversion
Ensures user input is converted from string to number for comparison.

-> Graceful UI State Management
Shows/hides elements (.style.display) based on game state — difficulty selection, game in progress, game over.

# How to Run

Just open the index.html file in any modern browser — no installation required.
Make sure script.js is in the same folder.

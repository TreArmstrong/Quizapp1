# LRNR Quiz App

LRNR is an innovative application built with React, Node.js, and the Claude API. It allows users to create custom quizzes using Claude's advanced algorithms, delivering a unique and interactive learning experience. LRNR utilizes the power of Claude to generate personalized quizzes tailored to each user's preferences. Beyond just quiz creation, LRNR evaluates the accuracy of users' responses and provides valuable feedback to enhance learning outcomes. Stay tuned as we continue to evolve LRNR, bringing you an unmatched learning platform.

## Tech Stack

LRNR utilizes the following technologies:

  - **React.js**: A JavaScript library designed for creating user interfaces, allowing for rapid and responsive frontend development.

  - **Materialize**: A modern, responsive front-end framework built on Material Design principles, offering pre-styled UI components for efficient design.

  - **Node.js**: A runtime environment that executes JavaScript on the server side, supporting backend development and API integration.

  - **Claude by Anthropic AI**: An advanced artificial intelligence platform specializing in natural language processing, used to generate quiz content tailored to user preferences.


## Getting Started

To set up the LRNR Quiz App locally:

1. Clone the LRNR Repository: `git clone https://github.com/TreArmstrong/Quizapp1.git`
2. Navigate to your directory
3. Make sure to have [Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) installed
4. Install all dependencies: `npm init -y` and `npm install`
5. Obtai an API Key with [Claude Anthropic ](https://www.anthropic.com/claude)
6. To run the app: `npm start`

## API Documentation

LRNR depends on Claude by Anthropic AI to generate quiz content. For detailed information on authentication, endpoints, parameters, and usage examples, refer to the Claude [documentation](https://docs.anthropic.com/en/docs/welcome).

1. Obtain an API Key by signing up 
2. Create a `.env` file
3. Add your API key to your `.env` file
   - ANTHROPIC_API_KEY: *your_API_Key*
  
## Usage

#### Accessing the Quiz:

1. Start your server
2. Navigate the Home Page
3. To begin the quiz, click **'Begin Journey'** button or the Quiz link on the navigation bar
4. On the quiz page, select your desired parameters, such as Topic, Expertise level, Number of questions, and Question style
5. Click the **Submit** button to continue

#### Taking the Quiz:

1. Each question will be displayed individually.
2. Enter your answer in the provided input box and submit.
3. After each submission, you'll receive a grade and an explanation.
4. Click "Next Question" to proceed to the next one.

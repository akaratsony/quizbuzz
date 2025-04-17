# QuizBuzz

QuizBuzz is a fun and interactive quiz application designed to test your knowledge about legendary fictional characters. Built with React Native and Expo, it supports both mobile and web platforms, providing a seamless experience across devices.

## Features

- **Dynamic Quiz Questions**: Answer questions about unique characters like John Pork, Tim Chesee, and Bombardiro Crocodilo.
- **Image-Based Questions**: Each question is accompanied by an image to make the quiz more engaging.
- **Progress Tracking**: A progress bar shows how far you've come in the quiz.
- **Score Calculation**: Your score is calculated based on correct answers, and you can view it at the end of the quiz.
- **Responsive Design**: Optimized for both mobile and web platforms, with adaptive layouts for different screen sizes.
- **Play Again Option**: Restart the quiz anytime to improve your score or challenge yourself again.

## Screens

1. **Splash Screen**: Welcomes users with an introduction to the quiz and a "Start Quiz" button.
2. **Questions Screen**: Displays questions, options, and a progress bar. Users can select an answer and proceed to the next question.
3. **Score Screen**: Shows the final score and provides an option to play again.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/quizbuzz.git
   cd quizbuzz

Install dependencies:
   ```
	npm instal
 ```
Start the application:
npm start
Run on your desired platform:

For Android:    ``` npm run android ```
	For iOS:  ``` npm run ios ```
	For Web: ``` npm run web ```
Project Structure
 ``` bash
quizbuzz/
├── assets/               # Images and icons used in the app
├── src/
│   ├── components/       # Reusable UI components
│   ├── config/           # Configuration files (e.g., questions)
│   ├── navigation/       # Navigation setup
│   └── screens/          # App screens (Splash, Questions, Score)
├── [App.js](http://_vscodecontentref_/0)                # Entry point of the app
├── [package.json](http://_vscodecontentref_/1)          # Project metadata and dependencies
├── dockerfile            # Docker configuration
├── [app.json](http://_vscodecontentref_/2)              # Expo configuration
└── .gitignore            # Git ignore rules
```

## Technologies Used
- **React Native:** For building the mobile and web app.
- **Expo: For development** and deployment.
- **React Navigation:** For managing navigation between screens.
- **Tailwind CSS (via twrnc):** For styling.
- **React Native Progress:** For the progress bar.

## How to Play
- **Launch the app.**
- **Start the quiz from the Splash screen.**
- **Answer each question by selecting an option.**
-**View your score at the end and choose to play again if desired.**

## Future Enhancements
- **Add more questions and categories.**
- **Implement a leaderboard to compare scores with others.**
- **Add sound effects and animations for a more engaging experience.**


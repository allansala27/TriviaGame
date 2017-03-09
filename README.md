# HW - {TriviaGame}

## Live Link (If relevant)
 - https://allansala27.github.io/TriviaGame/

## Description on how to use the app
- Press start and answer as many questions as you can before time runs out. You can stop the music with the buttons at the bottom left. 

## Requirements

- Have a live timer count down the time
- Multiple Choice questions
- A score to be displayed when time runs out

## Technologies Used
- Jquery for Dom Manipulation
- JavaScript for functionality

## Code Explaination
- I first created a document ready function to hide the questions and score until the user has pressed start.
- Once the user presses the start button, the countdown timer starts
- When the timer hits 0, the function getScore is called
	- getScore calls the getAnswer function to check whether the value of the selected button is correct or incorrect
	- getAnswer returns the value to getScore where it will increment the variable score by 1 if the value returned is correct
	- After getScore has looped through all the questions, it will call giveScore to display the user's score to the html.
		- An image will be displayed with a corresponding image

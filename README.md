# Mr. Roboger's Neighborhood

#### Created by Rian Carter

## An Application for Replacing Integers with Words

## Link to Mr. Roboger's Neighbordhood

* https://github.com/Rian-Carter/arraysAndLooping.git

## Technologies Used

* HTML
* CSS
* Javascript
* jQuery

### This application will take user input and feed it back out to the user replacing certain numbers with words. ex. 1 will become "Beep!"

## Setup/Installation Requirements

* Clone this repository to your desktop
* Open index.html in a browser

## Tests:

#### Describe: mrRobo

* Test: "It will return a new list of numbers starting at 0 up to the users inputted number"
* Code: mrRobo(5);
* Expected Output: 0,1,2,3,4,5

* Test: "It will return list of numbers starting at 0 to the user's inputted number and replace 1 with "beep!"
* Code: mrRobo(5);
* Expected Output: 0,beep!,2,3,4,5

* Test: "It will return list of numbers starting at 0 to the user's inputted number and replace 2 with "boop!"
* Code : mrRobo(5);
* Expected Output: 0,beep!,boop!,3,4,5

* Test: "It will return list of numbers starting at 0 to the user's inputted number and replace 3 with "Won't you be my neighbor?"
* Code: mrRobo(5);
* Expected Output: 0,beep!,boop!,won't you be my neighbor?,4,5

* Test: "It will return a list of numbers starting at 0 to the user's inputted number and replace any number that has 1 with "beep!"
* Code mrRobo(10);
* Expected Output: 0,beep!,boop!,won't you be my neighbor?,4,5,6,7,8,9,beep!

* Test: "It will return a list of numbers starting at 0 to the user's inputted number and replace any number that has 2 with "boop! while overiding the 1s"
* Code: mrRobo(12);
* Expected Output: 0,beep!,boop!,won't you be my neighbor?,4,5,6,7,8,9,beep!,beep!,boop!

* Test: "It will return a list of numbers starting at 0 to the user's inputted number and replace any number that has 3 with "won't you be my neighbor?" while overiding the 1s & 2s.
* Code: mrRobo(36);
* Expected Output: 0,beep!,boop!,won't you be my neighbor?,4,5,6,7,8,9,beep!,beep!,boop!

## Known Bugs

* There are no know bugs at this time
* Please foward any bugs to R.Carter86@hotmail.com

## License

* MIT https://en.wikipedia.org/wiki/MIT_License
* Copyright (C) 2/11/2022 Rian Carter
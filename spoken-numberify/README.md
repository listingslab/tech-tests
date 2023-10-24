# spokenNumberify

This app is built using an HTML5 Boilerplate with Twitter's Bootstrap from https://html5boilerplate.com. 

It was built using modern Front end build tools such as Node.js package manager npm, Grunt, JSHint and more.

## The Task

Describe the process that will take a number [0 - 999,999,999,999] and convert it into its spoken equivalent. For example, 167 would convert to "one hundred and sixty seven".

## The Solution

1. Start the App
Basic validation is done using the type="text" parameter in the input field which restricts the input to numbers only. Then we add a keyup event to run our program every time the value in the input changes and focus the cursor in the box.

2. Validate Input
We do a quick validation of the number to make sure it's not too large or NaN (Not a number). If the number isn't valid we'll turn the input box red and display an error message. If the number is valid, we get to the core of the program.

3. Convert the number
To convert the number to its spoken equivalent we first find out how many digits it has. This gives us an idea of it's size. If it's got 7 digits, then it is some millions. If it only has 3, then it is in the hundreds.

We can then carefully work our way through the number, splitting it into chunks which we can run through another process to return the word values and suffix them with the size of the chunks.

For instance if we have the number 13675. We can tell from the fact it has 5 digits that it is some tens of thousands. We slice off and process the first two digits from the number which gives us thirteen thousand. We can then run the rest of the digits through the same process and proviving it isn't zero, we'll know to add the words and six hundred and seventy five.
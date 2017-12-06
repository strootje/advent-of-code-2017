# [Advent of Code 2017][aoc17]
My solutions to the advent challanges

## How to run
I am really lazy so I just used [jsfiddle][jsf] to run my tests.
Just copy the index.html in the html pane and the code.js in the javascript pane

## Descriptions per day
### Day 1
Solution a: was faily easy to get. Just get the switch at the end for getting the 0 index correct.
Solution b: was easy aswell, just increase the jump each time.

### Day 2
This one was easier then day 1.

Solution a: just sort the list descending and get the first and last element.

Solution b: use a double loop in order to search. remember to exclude the same element in the inner loop or you get duplicates

### Day 3
This one was a big step up.

Solution a: once I figured out how to calculate the grid size (sqrt of the next highst corner) it was doable. Just loop in circles around the grid from the center like a snake.

Solution b: reuse a lot of code from a, just change the step sizes.

### Day 4
I am really starting to like these challanges. This one was fun.

Solution a: used a history array to create a 'set' of sorts (like in c#). Then just keep checking of we already had a word / phrase

Solution b: just sort the 'words' alphabetically in the history 'set' and anagrams are easely destroyed!

### Day 5
This one felt like a game again. Just jumping back and forth, really fun.

Solution a: use a undefined check to see if you jumped out of the array, then just follow instructions.

Solution b: added a quick change to the increment line.

### Day 6
Had some trouble with this one. But it worked out in the end, had to rewrite it due to a computer crash.

Solution a: Wrote some really ugly and inefficient code to loop over everything. And had real trouble with the redistrubuting. I was skipping the last one so it kept going to 0.

Solution b: My horribly inefficient code came to use here. Just a quick addition of the indexOf to compare and done!


[aoc17]: http://adventofcode.com/2017/
[jsf]: http://jsfiddle.net/

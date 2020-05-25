# ROBOT FACTORY

 Get the factory working, and build some robots!

## Installation

Run `npm install`

## Usage

In the terminal, run the following command:

`npm run start`

## Advanced Usage

- To check your JavaScript with ESlint, run `npm run eslint`

## Assignments

The following assignments should help you become more familiar with ES6 classes, as well as prepare you for reading and dealing with JavaScript errors.

Things we will use / learn:

- how to use a `for loop` in JavaScript
- `Math.random()` for generating random numbers
- ES6 Classes
- The Browser `console`

> Teachers: Make sure to instruct your students to pay attention to and read the errors in the browser console

### Assignment 1 - Connecting our JavaScript to our HTML

Just as we did in the past with our CSS stylesheets, to access our JavaScript from our HTML, we need to include it on the page.

We do this via the use of the `<script></script>` tag.

Using the `<script></script>` tags we can either:

- import a JavaScript file
- write JavaScript directly into the file

In this case, we will import the file `js/Robot.js`

1. After the `<body></body>` tag, insert the line `<script src="js/Robot.js"></script>`

### Assignment 2 - Inspecting our Robot

All the robot logic is contained inside an ES6 "class".

Research: [ES6 Classes [English]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

Research: [ES6 Classes [Deutsch]](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Klassen)

1. Open the file `js/Robot.js`. Have a look at the contents of the file.

2. Do you see a `Robot` class?

3. How many methods does the class have?

4. Can you tell what the methods do?

5. What constructor properties does the class require?

6. How would we instantiate the class?

Once you are familiar with the Robot class, move onto the next assignment.

### Assignment 3 - Creating a JavaScript Robot

We learned from the previous assignment that the Robot class has 3 methods.

- `static generateId()` - this method creates a unique value (id) for the Robot
- `constructor()` - this method is called automatically when the class is instantiated
- `render()` - this method draws the robot on the screen

If we want to create a Robot from the Robot class, we must instantiate it from the class.

1. Under our `<script src="js/Robot.js"></script>` tag inside `index.html`, create a new script tag `<script></script>`. We will write our JavaScript here. Ask your teacher why we might do this.

2. Instantiate the `Robot` class you found in `js/Robot.js` using the `new` keyword. You should get an error in the browser `console`. What does the error tell us? If we examine the class again, we'll see that the constructor requires an HTML element in order to "attach" itself to. This element becomes the "parent".

2. Supply the instance with an HTML element to act as the "parent" value. Use the `document.querySelector` function to grab the HTML tag `<div class="world"></div>`, and pass this as an object into the Robot constructor.
    
3. Now our error is gone, but we still can't see our robot. Remember that `render()` method we saw earlier? We need to call this method to draw the robot on the screen. Call this method to draw the robot. You should get another error.

> Hint: You can call the `render()` method from within the constructor, so that it is called automatically when the class is instantiated.

4. We still can't see our robot! Examine the error. What does it say? How can we fix this? Look again carefully at the `render()` function. What parameters does it require?

> Hint: The `render()` function expects 2 values - x and y, in order to render it on the page. You can pass in dummy % (from 0 - 100) values into the render function.
    
### Assignment 4 - Fix our stylesheets

How frustrating! After all that work, we still can't see the Robot 🤖. This is because we are missing some CSS. I promise you, after this, you will see the Robot!

We are missing some code in our stylesheets.

Open the file `styles/styles.css`, and modify the CSS for the robot.

1. Include the background image "robot.gif"

2. Give the robot a width of 100px

3. Give the robot a height height of 200px

4. Set the position to absolute
    
Do you see the dancing robot? 🤖

### Assignment 5 - Improving our Robot

There are a few things we can do to improve our robot.

Let's add 2 more arguments in the constructor (alongside the parent argument)

1. Add the arguments `x` and `y` into the constructor

2. Set these values as class properties using the `this` keyword

3. Refactor your code so that the call to the `render()` function now uses these class properties.

4. Add the `x` and `y` values into the statement where you instantiate the `Robot` class

Something else is bugging me. The `id` which is given to each robot, is hidden.

5. Refactor the code so that the `id` which is being generated as a class property.

> Hint: Set `this.id` in the constructor

6. Refactor the code so that the `render` method uses the class property `id` instead of calling the static method `generateId`
    
Now we can access the id of each robot via the `id` property. For example, if you instantiated the class into a variable called `robot`, we can use `robot.id` to access the id of the robot.

### Assignment 6 - Building more robots

1. Instantiate 9 more robots onto the page (for a total of 10 robots).

> Hint: You only need to touch the code in `index.html` for this part.

2. Did you just copy + paste the `new Robot` line? Use a `for / loop` to instantiate the robots instead

3. Make it so that each instantiated robot has a random `x` and `y` co-ordinate

4. Place your instantiated robot into an array `[]`

5. Place the above code into a function. Call this function `robotGenerator`.
    - The function should return the array of robots
    - The function should accept a number value, which determines the number of
    robots that will be generated
    - Store the result of this function in a variable called `robots`.

### Assignment 7 - Examining the robots

1. Loop through the `robots` variable and `console.log()` for each robot the:
    - `x` co-ordinate
    - `y` co-ordinate
    - `id`

### Assignment 8 - More refactoring / destroy method

Just as we have a `render` method, we should also include a method to remove the robot from our HTML. To do this first, we need access to the HTML object which is being created in the `render` method (this information is currently private).

1. Refactor the code so that the `node` variable in the `render` method will be a class property.

> Hint: Set it to `this.node`

2. Create a new method called `destroy`. This is intended to destroy (remove) the method from our HTML.

Use the `remove` method, like this `this.node.remove()`

Research: [ChildNode/remove [English]](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove)

Research: [ChildNode/remove [Deutsch]](https://developer.mozilla.org/de/docs/Web/API/ChildNode/remove)

We can now call the `destroy` method on our instantiated robot object.

To test it, run the `destroy` method on each robot you loop through.

Did the robots disappear?

When you have finished, delete or comment out the loop code. We don't need it, it was just to demonstrate that we could do this.

### Assignment 9 - Collision detection! (BONUS)

We know the co-ordinates of each robot.

1. Create a new function called `collisionDetection`. Pass into this function the array of robots.
  - Loop through the robots and check to see if any of them have the same co-ordinates.
  - Use `console.log` to show a warning if any 2 robots exist in the same space
  
The chances that any 2 robots will have the exact same co-ordinates are quite slim.

We need to not only check if they have the same co-ordinates, but also check to see if any robots interfere with another's [bounding box](https://computersciencewiki.org/index.php/Bounding_boxes)

To do this we have to convert pixels to percentage, because each robot exists as a fixed dimension (pixels) but is positioned using percentages (%).

We can use this formula to discover the width of the robot as a % of the screen:

`robot width / screen width * 100`

And likewise, for the height:

`robot height / screen height * 100`

We can find the width of the page via the property `document.body.clientWidth`.
We can find the height of the page via the property `document.body.clientHeight`.

2. Use the information above to calculate if any of the robots are positioned inside the bounding box of another robot.

## Credits

Graphical assets taken from https://opengameart.org/

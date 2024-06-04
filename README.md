# 4.5 - Events in HTML/JS

###### ICS3U - Mr. J

### Quick Recap

- In order to connect HTML with JavaScript, we load the JS code through a `<script>` tag inside the `<head>` tag. (Yes, there are other ways to do it but we won't). We add the `defer` attribute so that the browser loads the script _after_ the HTML.

    ```HTML
    <script src="script.js" defer></script>
    ```

- JS can manipulate the HTML through the `document` object.
- We can find elements on the page with `document.getElementById("unique_id")`
- This allows us to manipuate the element through all sorts of properties and functions.

    ```JS
    let my_button = document.getElementById("add_btn");
    my_button.innerText = "Instructions";
    my_button.hidden = false;
    ```

- To make an element _react_ to user input, we need to register an _Event Listener_ which connects the event to a function.

    ```JS
    document.getElementById("add_btn").addEventListener("click", show_instructions);

    function show_instructions() {
        // Do a bunch of work 
    }
    ```

## Events

The [list of available events](https://www.w3schools.com/jsref/dom_obj_event.asp) is quite extensive. When in doubt, [Google it](https://www.google.com/search?q=js+event+keyboard+key). Let's take a look at a few together.

> 💻 Add the appropriate `<script>` tag to the [index.html](index.html) file so that the JS gets loaded.

### Mouse Events🖱️

The mouse is one of the most-used input devices. Not only does it have a [click](#click) event, but it also has [many other events](https://www.w3schools.com/jsref/obj_mouseevent.asp) associated with it. Preview the [index.html](index.html) file and move your mouse over the three different boxes to get a sense of the differences between three of the most common mouse events.

### Click

Almost _any_ element can react to a "click" event. This is when the user clicks the mouse button while the cursor is over the element in question. **You can see the example in the code block above that calls the function `show_instructions` when the button is clicked**.

> 💻 Our [HTML file](index.html) has a button called `btn_show_hide`. There is a `div` that is _hidden_ (invisible) because the `hidden` attribute is set. The div should show and hide when we click the button.
>
> Add a "click" event listener to the `btn_show_hide` button. It should call a function `show_hide()` that will toggle the `.hidden` attribute of the `hidden_text` div so that it either displays or hides.

### Keyboard Events ⌨️

Similar to the mouse, [the keyboard events](https://www.w3schools.com/jsref/obj_keyboardevent.asp) are very popular. They are:

- `"keydown"`: A keyboard key is physically pressed down but not necessarily released.
- `"keyup"`: A keyboard key is _released_ (going from pressed to not pressed).
- `"keypress"`: A keyboard key was pressed.

Knowing _which key was pressed_ takes a little more work. **You need to use [the event object](https://www.w3schools.com/jsref/obj_event.asp)**. It's not as hard as it sounds.

- Add a parameter to the function being called. The parameter should be called either `event`, `evt`, or `e`.
- Get which key was pressed by requesting / checking `event.key`, `evt.key` or `e.key`
- If you want to stop the browser from using the key for something else (like PgUp/PDn or the arrow keys) add `event.preventDefault()` to the end of the function.

    ```JS
    function key_pressed(event) {
        if (event.key == "Enter") {
            // Pause the game
        } else if (event.key == "Space") {
            // Fire a laser or jump or something
            // Don't let the browser scroll the page
            event.preventDefault();
        }
    }
    ```

> 💻 Let's try it. Add an event listener to the window: `window.addEventListener("keydown", track_key)`
>
> Create the function `track_key` with the event object and print the `.key` to the console. This is really handy when trying to figure out what a key is called or tracking it for future coding.

```JS
function track_key(event) {
    console.log(event.key);
}
```

> Now modify the code so that when you hit `Space` the hidden div is shown or hidden, just like clicking the button.

### Play around with HTML elements

Inside the [`images`](images) folder you will find two pictures of a door. See if you can get the door displayed on the page **and** close or open it when you click it!

<table><tr><td><img src="images/door_closed.png"></td><td><img src="images/door_open.png"></td></tr></table>

Take a look at some other [HTML elements](https://www.w3schools.com/html/html_elements.asp) or [events](https://www.w3schools.com/jsref/obj_mouseevent.asp) and start thinking of a program or game you might want to code!

<br>

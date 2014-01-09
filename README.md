#Flipping Text by Pete R.
Create a ticking intro animation for your typography
Created by [Pete R.](http://www.thepetedesign.com), Founder of [BucketListly](http://www.bucketlistly.com)

[![Flipping Text](http://www.thepetedesign.com/images/flipping_text_image.png "Flipping Text")](http://www.thepetedesign.com/demos/flipping_text_demo.html)

## Demo
[View demo](http://www.thepetedesign.com/demos/flipping_text_demo.html)

## Compatibility
Modern browsers such as Chrome, Firefox, and Safari on both desktop and smartphones have been tested. I have not tested this on IE.

## Basic Usage
To create a ticker effect for you typography, simply include the latest jQuery library together with `jquery.flipping_text.js` into your document's `<head>`, and call the function as follows:

````javascript
  $(".intro").flipping_text({
    tickerTime: 10, // Define a time between each ticket in milliseconds. The default value is 10.
    customRandomChar: false, // You can use your own random strings by defining them here. The default value is false which will use my random string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    tickerCount: 10, // Set the number of characters randomly shown before the real text is shown here. The default value is 10.
    opacityEffect: true, // You can toggle the opacity effect here. Set this to false if you don't want the random text to fade in. The default value is 10.
    resetOnChange: false // Toggle this to true if you want the plugin to stop and fill in all the text immediately when the user changes browser's tab. The default value is false.
  });
````

Now all you have to do is laid your HTML markup as shown below:

````html
<h1 class="intro">...</h1>
````
## Markups

With this plugin, you can use a markup to set the delay between each intro animation. Here's how to run each animation in sequence:

### data-delay
This markup will let you define the time between each animation. The time  will stack up automatically with the previous defined delay time so you do not have to calculate the time by your self. An example is shown below:

````html
<h1 class="intro">...</h1>
<h1 class="intro" data-delay="1000">...</h1>
<h1 class="intro" data-delay="1000">...</h1>
````

The first intro will animate immediately, the second intro will animate 1000 milliseconds after the first one and the last one will animate 1000 milliseconds after the SECOND one, so 1000ms delay will keep on stacking as you define them in order.

And that's all for the Flipping Text plugin. Stay tuned for more updates.

If you want to see more of my plugins, visit [The Pete Design](http://www.thepetedesign.com/#design), or follow me on [Twitter](http://www.twitter.com/peachananr) and [Github](http://www.github.com/peachananr).

## Other Resources
- Tutorial (Coming Soon)

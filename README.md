# Swipe for tablets
=====

Swipe is a free extension for jQuery that supports swipe gestures in x direction on tablets.

## Use

You can use swipe like any other jQuery event:
<pre>
$('#myobject').swipe({ swipeTime: 800, swipeX: 100, left: swipeLeftFunction, right: swipeRightFunction });
</pre>

Tweak swipeTime and swipeX to adjust the sensitivity of the swiping gesture detection. 
By default swipe will print to console for left and right gestures. 
/*
The question is as follows:

You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the 
angle that is formed by the minute hand and the 12 o'clock mark on the clock.
 

Example

If the input is: 15 then your program should return 90 because a 90-degree angle is formed by the minute hand and the 12 
o'clock mark on the clock. We'll solve this challenge by first calculating what angle is created by each minute passing 
on a clock. Once we calculate this number, we multiply it by the input to determine the final angle. 

More information regarding this problem, and how to calculate the angle between both clock hands, can be found here.

*/

function simpleClockAngle(num) {

  // we got 6 because 360/60 = 6
  // 360 represents the full number of a degrees in a circle and
  // 60 is the number of minutes on a clock, so dividing these two numbers
  // gives us the number of degrees for one minute
  return 6 * num;

}

simpleClockAngle(15);

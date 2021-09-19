# WATermelon

Devpost: https://devpost.com/software/watermelon-pw8k4u

## Group

Hello, we are George, Brandon, Nolan and Justin, four first-year UWaterloo Software Engineering students and the creators of WATermelon. 

You can find our LinkedIn's and GitHub's at the following links:

George - https://www.linkedin.com/in/georgeshao/ & https://github.com/GeorgeShao

Brandon - https://www.linkedin.com/in/brandon-gartner/ & https://github.com/brandon-gartner

Nolan -  https://www.linkedin.com/in/nolanwhiteroy/ & https://github.com/NolanWhiteRoy

Justin - https://www.linkedin.com/in/justinpeng1209/ & https://github.com/Justin-Jingcheng-Peng

Thank you for taking the time to look at our project; we had lots of fun making it. If you have any questions about WATermleon, please don't hesitate to reach out!

## Inspiration

Nothing compares to the disappointment of biting into what you thought would be sweet, mouth-watering, ripe watermelon, only to be greeted by the bland taste of bitter unripe melon.

 **Our group had been burned by bland watermelons one too many times, and we were going to do something about it.**

During our brainstorming phase, we noticed that we had a shared experience that seemed to solve this complicated and pressing issue.

When we were in elementary school and would go to the grocery stores with our moms, we remembered that they would try to determine the ripeness of watermelons at the supermarket by vigorously knocking on them and listening to the sound. 

After some quick research, we recognized that it would be feasible to accurately determine the ripeness of watermelon only using a standard phone or laptop microphone, putting an end to the miserable situation described above.

## What it does

WATermelon uses machine learning to determine the ripeness of a watermelon by analyzing its pitch when knocked on. Our app simplifies selecting watermelons and prevents you from cutting into a watermelon only to find that it's unripe or not ripe enough.

## How we built it

First, we modified a pre-trained machine learning model, designed originally to tune a ukulele, in combination with accepted scientific values for the acoustic properties of watermelons. 

Simplified, as watermelons ripen, their natural frequency increases when knocked on because of biochemical reactions occurring, with an average watermelon having a frequency around 125hz and the ideal watermelon around 170hz.

Once we had our backend working, we designed an intuitive user interface using freehand drawings and Balsamiq. We then used React to develop the web application.

## Challenges we ran into

The pre-trained machine learning model was often not sensitive enough to pick up on the frequency of short watermelon knocks because it was originally designed for sustained notes from musical instruments. We also had some issues transferring pitch data between the front and back end of our application. Thankfully, we eventually managed to find unique solutions to fix both of these issues

## Accomplishments that we're proud of

We are incredibly proud of our group's time management skills, completing an involved project while balancing our academic commitments as first-year engineering students.

## What we learned

This was many of our members first exposure to both machine learning and React. Also, we learned some interesting biology about the watermelon lifecycle!

## What's next for WATermelon

Cantaloupe.

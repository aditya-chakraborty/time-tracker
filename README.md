# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges helps to prove your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge is to build a user interface that looks and feels as close as possible to the given design. Users should be able to:

<!-- - View the optimal layout for the site depending on their device's screen size -->
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://time-tracker-iota.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup (JSX)
- CSS custom properties
- CSS Grid
<!-- - Mobile-first workflow -->
- [React](https://reactjs.org/) - JS library

### What I learned

My focus in this project has been on achieving more with lesser code. I am proud of the piece of code mentioned below as I was able to leverage a couple of JavaScript's powerful functionalities (like Objects and Spread operaters) to keep my code DRY. Please have a look:

```js
    const ActivityStyle = {
        'Work': {
            color: 'hsl(15, 100%, 70%)',
            icon: workIcon,
        },
        'Play': {
            color: 'hsl(195, 74%, 62%)',
            icon: playIcon,
        },
        'Study': {
            color: 'hsl(348, 100%, 68%)',
            icon: studyIcon,
        },
        'Exercise': {
            color: 'hsl(145, 58%, 55%)',
            icon: exerciseIcon,
        },
        'Social': {
            color: 'hsl(264, 64%, 52%)',
            icon: socialIcon,
        },
        'Self Care': {
            color: 'hsl(43, 84%, 65%)',
            icon: selfCareIcon,
        },
    }
    
    const activityDetails = data.map((activity, idx) => {
        return {
            ...activity,
            ...ActivityStyle[activity.title],
            id: idx,
        }
    })
```

### Continued development

This project has also been a good endeavor for me to get better at creating responsive UI. I also obtained experience working with CSS Grids. Although more of a Flexbox-person, I am so glas to get this opportunity to leverage the power of CSS Grids. I want to keep focussing more on creating mobile-first screens and add responsiveness to the user interfaces I create, and hope to achieve mastery at it in due time!⚡️

### Useful resources

- [Open Classroom | Layouts with CSS Grid](https://openclassrooms.com/en/courses/5295881-create-web-page-layouts-with-css/5364131-define-grid-element-height-and-width) - This helped me understand how CSS Grid works and creating the perfect layout for this project. 

## Author

- LinkedIn - [Aditya Chakraborty](https://www.linkedin.com/in/aditya-chakraborty/)
- Frontend Mentor - [@aditya-chakraborty](https://www.frontendmentor.io/profile/aditya-chakraborty)
- Twitter - [@AdityaChkrabrty](https://twitter.com/AdityaChkrabrty)
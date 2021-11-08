---
layout: layouts/post.njk
title: Pure CSS Images not just for 'funsies'
description: I quickly found myself making CSS images each week. It was just as fun as I expected, but here’s some examples of things I learnt along the way…
date: 2020-04-18T14:00:00.000Z
---

In 2019 I did a lightning talk at the [SydCSS](https://www.meetup.com/en-AU/SydCSS/) first time speakers night. This is a written version of that talk for those who were not able to attend. You can still [view the slides for the talk if you’re interested](https://docs.google.com/presentation/d/19nUNOWb3MLZZXNZhlWYwP9CXvZnWKJUBjjlVzm4RBsw/edit?usp=sharing).

Something that most people know about me is that before changing careers to web development in 2018, I worked as a pastry chef. I actually got my start as a cake decorator and used to spend quite a bit of time making figurines out of fondant icing for cakes.

![Cupcakes with Princess Toppers made from fondant](/img/Photo-19-4-20-12-58-12-pm-768x1024.jpg)

As I began learning web development I started seeing people creating beautiful art out of HTML and CSS only. The more I looked at these pictures drawn with CSS I began to see their parts and how similar it was to my fondant creations. Each part is a small shape, and when put together they create the whole image (or tasty decoration!). It seemed very similar to what I’d been doing in my previous career.

I was pretty excited, and my thought process looked a little like…

- I could probably do that
- It looks super fun
- But what’s the point?

Let’s be real, nobody is going to pay me to create pictures out of CSS. The amount of code it takes to make complex images can be a little ridiculous, it’s pretty ‘hacky’, and would just be so much easier to use an actual image file.

But at the start of 2019 I was really keen on improving my CSS skills and heard about [Codepen Challenges](https://codepen.io/challenges). They have a different theme every week and I thought I could use each challenge as an opportunity to learn about a new property, or practise something I’d learnt at work

I did this for 3 months and I quickly found myself making CSS images each week. It was just as fun as I expected, but here’s some examples of things I learnt along the way…

Disclaimer: None of these were built to be responsive, and really only work on desktop. Click the links to view the full CodePen.

**[CSS Animations](https://codepen.io/tarynewens/pen/KbeNYX)**

![Animated gelato image made with CSS](/img/gelato-298x300.gif)

This pen did use javascript to detect the mouse movements but the animations themselves are done using CSS. I got to experiment with using keyframes to adjust transforms to create the gelato’s melting effect and the face movements.

**[CSS Grid and Triangles](https://codepen.io/tarynewens/pen/WPgwZO)**

![Geometric heart image made with CSS](/img/Photo-14-2-19-4-56-31-pm-297x300.jpg)

When triangles came up I was very happy to have recently learnt about CSS triangles at work when I’d been styling our (now old) desktop navigation. I wanted to practise CSS grid as well, so I created the grid and filled each section with a triangle. Repeating the triangles all from different angles was great to help me understand how they worked.

**[Clip-path](https://codepen.io/tarynewens/pen/WmwgJR)**

![Geometric pig image made with CSS](/img/Photo-3-3-19-10-00-13-am-300x300.png)

I’d tried to use clip-paths before at work only to throw the work in the trash when I realised it didn’t work in Internet Explorer (sigh!). I was keen to try it out though for the polygon challenge, and really got a chance to experiment with different shapes.

**[Box-shadow](https://codepen.io/tarynewens/pen/OqpVxe)**

![Ada Lovelace cartoon image made with CSS](/img/Photo-7-3-19-6-26-24-pm-300x300.jpg)

In a previous challenge I’d set out to create a single div CSS image and discovered that box-shadows could have multiple layers. I decided to practise this by using box-shadows to create the headband. Only one div was used for the whole headband, with the flower being a pseudo element with more box shadows. This image itself actually only used 6 divs in total.

I feel like this worked really well as a way for me to learn CSS because:

- Creating cute things was fun
- I was repeatedly using and experimenting with properties I hadn’t understood prior
- The end result made me want to make more
- I still use these pens as a reference when I forget how a property works

But that’s not to say you should all go out and start making CSS images. You might not learn in the same way that I do. As an example, some people can read tech docs and just get it. My brain just doesn’t work that way. I really only learn by doing and by practising and seeing the results. So my advice to you is to try different ways of learning, see what works for you and try to think of creative and fun ways to make it even better!

Finally, when you’re working on any sort of side project, please remember to be kind to yourself. Finding time for side projects on top of a full time job is seriously hard.For me it was a bit of trial and error to find what worked for me, but I found setting ‘soft goals’ to be quite helpful. Instead of saying “I’ll work on this thing for 2 hours a week” and then feeling terrible if I don’t find the time, I now set goals that are more like “I’ll try to work on this once a week”, and if I don’t it’s not the end of the world.

I also try to work on smaller and more manageable projects. Creating a small ‘pen’ on CodePen is far less stressful than trying to build a whole application. If you are building a whole application, remember to break it down into smaller and more manageable parts.

I can say from my own experience that if you put too much pressure on yourself, you’re probably going to end up stressed, miserable and burnt out. I’m sure none of us want that.

**So the key takeaways are:**

- CSS images are fun but you can also learn from them
- It’s important to explore different ways of learning and find what works for you
- Be kind to yourself, we have time to learn and grow – it doesn’t need to be rushed

I hope this inspires you to give CSS images a try, or find some other way of creative learning!

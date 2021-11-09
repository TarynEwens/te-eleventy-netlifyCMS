---
layout: layouts/post.njk
title: Moving my site from GatsbyJS to Next.JS
description: Are you even a developer if you don't rebuild your portfolio site in every new technology you want to try out? 🤣
date: 2020-05-28T14:00:00.000Z
---

Are you even a developer if you don't rebuild your portfolio site in every new technology you want to try out? 🤣

Every time I want to learn something new or try a new technology, I rebuild my portfolio / blog site. I'd like to say the reason is something profound, like I know the content so well that I can just focus on the technology (such as suggested in [Drew Hoover's article Coding For Fun](https://spin.atomicobject.com/2016/08/02/coding-for-fun/)). In reality though, I've had a personal website since as long as I can remember and my favourite pastime has always been changing it! It's a habit I haven't been able to shake.

So in the past couple of years I've gone through a few iterations of my site:

1. HTML, CSS, vanilla JavaScript
2. Wordpress (completed my life goal of building my own Wordpress theme!)
3. Headless Wordpress with GatsbyJS front-end
4. Next.JS

The last two were both quite recent so I thought I'd share some differences I've found in my first impressions of [GatsbyJS](https://www.gatsbyjs.org/) vs [Next.JS](https://nextjs.org/). To be clear, these are beginners impressions - how I felt about just starting out with them for the first time!

![Screenshot of my sites home page](/images/portfolio_screenshot.png)

### What are they?

GatsbyJS is a free and open source framework based on React. Next.JS is also a free and open source framework based on React! They both generate modern and performant websites.

The Gatsby documentation provides a [comparison of Gatsby vs Next.JS](https://www.gatsbyjs.org/features/jamstack/gatsby-vs-nextjs) so I won't go into detail about it. Based on the comparison (it's created by Gatsby so is it biased?) Gatsby wins out in every area. There are plenty of other articles and videos on the web comparing their features so give it a google if you're interested in more technical details.

From my research, for a small static website like my blog Gatsby is the most recommended. I won't disagree, I did get great results with Gatsby especially in terms of SEO. But let's look at some differences I've noted between the two:

### Documentation

Apart from my previous blog version, I'm also building a side project called CheesePets in Gatsby so I've I've spent a lot of time in the Gatsby documentation trying to figure certain things out. There is tonnes of documentation and it's very thorough. They explain what you need to get your site working.

I love good documentation, but it's rare that I publicly rave about it. When I started working through the [Next.JS 'learn'](https://nextjs.org/learn/basics/create-nextjs-app) section, however... I raved hard. I _love_ this tutorial. Not only is it super clear and walks you through a whole small project of a blog using markdown for posts (which is what I used as a base for my own blog), it also explains some other concepts along the way.

While working through this tutorial I _finally_ understood the difference between server side rendering and static generation (more on this later). I also learnt about CSS modules!

It was honestly the most enjoyable experience I've had with documentation in a new technology.

### GraphQL

GatsbyJS uses [GraphQL](https://graphql.org/) a lot. They even recommend using GraphQL to generate responsive images. I have nothing against GraphQL and I hope to one day have a chance to learn it well... but if you're not familiar with it this can be a hurdle to getting started.

I can't tell you how many times I've read the documentation to use GraphQL for images in Gatsby. Have I ever been successful? Sadly, no. This isn't on Gatsby, this is on me and my struggle to understand it.

On the other hand, as long as you know JavaScript and React you shouldn't have any problems with Next.JS... but you also don't get the benefit of those responsive images. In my case, I don't have tonnes of images on my site and the ones I do have aren't huge so I don't see this as too big a concern for me.

### Static Site Generation vs Server Side Rendering

This is where I get confused. I've always understood Gatsby to be a static site generator. Next.JS on the other hand can do both static generation and server side rendering. But what's the difference? The [Next.JS documentation](https://nextjs.org/learn/basics/data-fetching/two-forms) explains it like this:

> Static generation: the HTML is generated at build-time and is reused for each request  
> Server side rendering: the HTML is generated on each request

That makes sense, right? But I've also seen documentation that says Gatsby _does_ server side render _because_ it renders the react pages to an HTML file during the build step. Unlike regular server side rendering (which generates on each request), it's faster and more lightweight to serve because the rendering is done at build time. Sooooo... what does this mean?

I feel like there's some confusion here between what people call server side rendering. But whatever you want to call it, it comes down to a key difference in these two frameworks:

- Gatsby generates HTML at build-time
- Next.JS has the option to either generate HTML at build-time OR on each request - you can even do both in the same app!

If anyone can provide some more clarity here, please let me know!

### CSS

This isn't actually to do with the frameworks, more to do with how I used them. You can use any type of CSS you want with Gatsby and Next.JS (although you may need to add a plugin or do some setup).

When I was using Gatsby I used SCSS with a [BEM methodology](http://getbem.com/introduction/) because that's what I've always used at work. It was what I knew and it was easy.

But after reading Next.JS's documentation about their [code splitting feature](https://nextjs.org/docs/old#automatic-code-splitting), I decided to give [CSS Modules](https://css-tricks.com/css-modules-part-1-need/) a go. CSS Modules automatically generate unique class names, so you don't need to worry about scoping. With the code splitting feature, only the CSS you use on the page is loaded, rather than all your CSS for the whole site being loaded on every page. Awesome performance benefits there!

I'm still not fully used to it yet... I'm so used to using BEM that changing my mindset is difficult, but I can see the benefits so I'm glad I persisted with it! I'll need to build another project with them soon so I can really settle into it.

### Link tags

This is not a major issue but something I found an interesting difference between these two.

In Gatsby.JS when you're creating an internal link you want to use the built-in <Link> component, with the `navigate` function which is used for programmatic navigation. You import the link component at the top of the file and then use it like this:

```jsx
// Import at top of file
import { Link } from "gatsby";

// Use in JSX
<Link to="/blog">blog</Link>;
```

In Next.JS however, it's a little different. You still import their built-in <Link> component but you don't need a `navigate` function - it does everything automatically. But you still need an `<a>` tag. Internal links in Next.JS look like this:

```jsx
// Import at top of file
import Link from "next/link";

// Link in JSX
<Link href="/blog">
  <a>blog</a>
</Link>;
```

Interesting thing to note here that I've discovered just through experimentation: the href goes in the `<Link>` tag, but other attributes such as `className` or `aria-label` go on the `<a>` tag.

I'm not sure why it works this way, if anyone would like to explain it to me please do!

### Wrap up

So that's just my initial thoughts from building a very simple site with both Gatsby and Next.JS! If you're interested you can view my Github repos for each version, [GatsbyJS with Wordpress](https://github.com/tarynewens/taryn-codes) and [NextJS](https://github.com/tarynewens/nextJS-portfolio).

Both are great frameworks and I'm sure once I spend the time to learn GraphQL I'll love Gatsby just as much (if not more!) than Next.JS.

One parting note: I only spent a few hours to set up my latest Next.JS version and here's the results from a Google Lighthouse audit:

![Screenshot of audit results showing all green numbers, 97 for performance, 100 for everything else](/images/lighthouse_audit.png)

Performance would be even better if I wasn't too lazy to resize my images 😉although tech Twitter tells me I can easily resolve this with the use of the [imagemin plugin](https://www.npmjs.com/package/imagemin). Another task for another day!

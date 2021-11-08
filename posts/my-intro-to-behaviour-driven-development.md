---
layout: layouts/post.njk
title: My intro to Behaviour Driven Development
description: We’ve recently begun looking into using Behaviour Driven Development (BDD) in our team. Here are just some notes I’ve been making as I’ve been learning about it myself.
date: 2019-06-01T14:00:00.000Z
---

We’ve recently begun looking into using Behaviour Driven Development (BDD) in our team. Here are just some notes I’ve been making as I’ve been learning about it myself.

Ever heard of Test Driven Development (TDD)? If you haven’t that’s okay, but if you have from what I can tell, it’s pretty similar! From my very limited knowledge on the topic, TDD is all about writing tests first (which will all fail, because there’s no code) and then you write your code only to pass those tests. This is like TDD but in a more accessible language (in our case, English!) so that all stakeholders can write tests, not just the tech team. In BDD, we’re writing behaviours that the software should have.

This means that our whole team including developers, QA, and product managers can all be involved in testing and ensure that we’re creating what was actually intended.

Cucumber is our tool of choice. It’s written in Ruby but it doesn’t matter what tech stack you’re using it with because Ruby is quite good at talking to other languages and platforms. The tests in Cucumber can be written in more than forty different spoken languages – this makes them very easy to read and write. To get an understanding of Cucumber we began reading [“The Cucumber Book: Behaviour-Driven Development for Testers and Developers” by Matt Wynne and Aslak Hellesøy](https://www.amazon.com/Cucumber-Book-Behaviour-Driven-Development-Developers/dp/1680502387).

Here’s an example of a Cucumber acceptance test from The Cucumber Book:

```jsx
Feature: Sign up
Sign up should be quick and friendly

Scenario: Successful sign up
New users should get a confirmation email and be greeted personally by the site once signed in.

Given I have chosen to sign up
When I sign up with valid details
Then I should receive a confirmation email
And I should see a personalized greeting message
```

Cucumber is a command line tool and when you run it, it reads the specifications you’ve written in text files called ‘features’ and runs them. Even though they’re written in English in our case, the specifications do have to follow some syntax rules. The amazing part is that the name for these rules is Gherkin! This sparks so much joy for me! Definitely not throwing it away just yet.

Gherkin uses keywords such as Feature, Scenario, Given, When, and Then to describe behaviour. The feature is what you’re testing, and each feature file should contain between five and twenty scenarios. Every scenario must follow a pattern. It should have a context (Given), an event (When), and an outcome (Then). Only when all of these scenarios are combined do you have the expected behaviour of the feature.

One thing to remember is that “Each scenario must make sense and be able to be executed independently of any other scenario”. Basically, every time a scenario is run, Cucumber starts with a blank slate so you should never assume any particular ‘state’ of a feature.

Once your feature files are set up, you also need to give Cucumber a set of step definitions, which turn the English scenarios into Ruby code in order to carry out the tests. This code will step through each scenario one by one, test them all and print the results.

The biggest benefit of BDD is communication. Cucumber aims to help avoid problems where you spend a week working on a feature, only to discover you built something different to what the stakeholders wanted. If you and the stakeholders had spent time writing acceptance tests at the beginning, what was expected would have been clearer, you could have received feedback earlier, and potentially found some weird edge cases. We can use Cucumber to document exactly what we want a feature to do – and it’s in a language that can be understood by all parties involved!

The main goal of cucumber is ‘readability’. The whole point is that the tests should be easily understood by any stakeholder that reads them. The keywords mentioned above are just enough to get started, but there are many more that we can use to construct scenarios that are nice to read, provide context, an aren’t too repetitive.

So this is just the high level, easier to understand part. I’m going to dive deeper into it tonight and tomorrow – I may post some more about this as I take notes to understand it, but it gets a lot more technical from this point onwards. Wish me luck!

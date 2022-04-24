const quoteOfTheDay = () => {
  let quotes = [
    "Instead of a justify-content center, or flex-end... I need a justify-content: flex-slightly-past-two-thirds.",

    "I'm just throwing var_dumps around and trying to understand PHP.",

    "I think I var_dumped my way to success!",

    "I think I'll be okay once I sort out all of my rounded fellas and curly fellas ) } ",

    "It just gets used in a construct thingy.",

    "Now I'm having inspiration for my portfolio site and having design regrets... like food regret, but design regret.",

    "Some days I really wish you could traverse up the DOM in CSS.",

    "Me: Why is my JavaScript not working? Also me: using PHP syntax",

    "My jQuery is so complex it disgusts me.",

    "I love a good implode()",

    "console.log('is this where the error is?');",

    "I just described my outfit as metro lumberjack vibes with a touch of Williams Wish Wellingtons",

    "It's like the dev gods were like 'just cause you're an engineer now, don't get a big head - the first deployment you do will break production!'",

    "Ejecting create-react-app isn't quite like painting a landscape...",

    "git commit -m 'a whole bunch of random changes because I can't decide what I want'",
  ];

  let n = Math.floor(Math.random() * quotes.length);
  return `"${quotes[n]}" - Taryn`;
};
const quoteParagraph = document.getElementById("quote");
const profilePic = document.getElementById("profilePic");
quoteParagraph.innerHTML = quoteOfTheDay();
profilePic.addEventListener("click", (event) => {
  quoteParagraph.innerHTML = quoteOfTheDay();
});

console.log("JAVASCRIPT FILE");

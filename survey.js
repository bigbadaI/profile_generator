const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let ans1 = "";
let ans2 = "";
let ans3 = "";
let ans4 = "";
let ans5 = "";
let ans6 = "";
let ans7 = "";
rl.question('What\'s your name? ', (answer) => {
  ans1 = answer;
  rl.question(`Nice to meet you, ${ans1} \nLet's make a profile together. \nWhat's an activity enjoy?`, (answer) => {
    ans2 = answer;
    rl.question(`While your enjoying your day ${ans2}, what do you like to listen to? `, (answer) => {
      ans3 = answer;
      rl.question(`Which is your favorite meal of the day ${ans1}? `, (answer) => {
        ans4 = answer;
        rl.question(`Very cool, and since ${ans4} is you favorite meal what is your favorite thing to eat for ${ans4}? `, (answer) => {
          ans5 = answer;
          rl.question(`Almost done ${ans1}, just a couple more. \nWhat is your absolute favorite sport? `, (answer) => {
            ans6 = answer;
            rl.question(`Lastly, What is your super power and in a few words why are you so amazing at it? `, (answer) => {
              ans7 = answer;
              
              console.log(`Thank you for answering my questions, I think your profile should read.\nHi there, my name is ${ans1}\nI think the best time to get to know me is over ${ans4} while I devour my plate of ${ans5} (sorry it's my favorite)\nAny day that I can spend ${ans2} while listening to ${ans3} is a good day in my books.\n"Theatres" NAH let's maybe check out my favorite sport ${ans6}\nLet's finish this off with a banger, my super power is ${ans7}!`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});
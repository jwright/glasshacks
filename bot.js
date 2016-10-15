var Botkit = require('botkit');
var controller = Botkit.slackbot();

controller.spawn({
  token: process.env.SLACK_BOT_TOKEN
}).startRTM();

controller.hears(['hello', 'hi', 'Hello', 'howdy'], ['direct_message'], function(bot,message) {
  bot.startConversation(message, (err, convo) => {
    convo.say("Hi, I am billy, thanks for having me!");
    convo.ask("What is your name?", (res, convo) => {
      convo.say("It's nice to meet you, " + res.text + "!");
      convo.next();
    });
  });
});

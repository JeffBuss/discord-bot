const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

const bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', (e) => {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', (user, userID, channelID, message, e) => {
  if (message.indexOf('!') === 0) {
    let args = message.substring(1).split(' ');
    let cmd = args[0];

    args = args.splice(1);

    switch(cmd) {

      case 'ping':
        bot.sendMessage({
          to: channelID,
          message: 'Pong!'
        });
      break;
      case 'hello':
        bot.sendMessage({
          to: channelID,
          message: `Welcome to the server, ${user}`
        });
      break;
     }
  }
});

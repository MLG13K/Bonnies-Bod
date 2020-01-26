const Discord = require('discord.js');
const client = new Discord.Client();
const {token} = require(".\\assets\\config.json");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'how are ya wayne?') {
    msg.reply('good n you?');
  }
});

client.login(token);
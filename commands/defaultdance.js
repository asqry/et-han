const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setColor("RANDOm")
  .setImage("https://cdn.glitch.com/b38ffd3e-9165-4769-bf60-7b814b5b55c3%2Fdefaultdance.gif?v=1574657273796")
  .setFooter("Bot Created By Taco#2942")
  
  message.channel.send(embed)
}

module.exports.help = {
  name: 'defaultdance',
  aliases: ['dd']
}
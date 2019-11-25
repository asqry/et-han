const Discord = require('discord.js')
const mango = "https://cdn.glitch.com/b38ffd3e-9165-4769-bf60-7b814b5b55c3%2Fmango.png?v=1574657656788"

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setColor("RANDOm")
  .setImage(mango)
  .setFooter("Bot Created By Taco#2942")
  
  message.channel.send(embed)
}

module.exports.help = {
  name: 'mango',
  aliases: ['randommango']
}
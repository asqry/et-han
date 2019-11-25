const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
  let hembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription("**E.T.Han Bot Command List**")
  .addField("**Basic Commands**", "`ehelp` - Lists every command\n\n\n`eping` - Pong!\n\n\n`echannels` - For the server owner - lists all of the channels you'll need for the bot to function!", true)
  .addField("**Moderation Commands**", "`ekick` [@user] [Reason] - Kicks the specified user from the server. Buhbye!\n\n\n`eban` [@user] [Reason] - Bans the specified user from the server. Drop the ban hammer!\n\n\n`ereport` [@user] [Reason] - Reports the specified user. Ooooooh... You're in trouble!", true)
  .addField("**Ticket Commands**", "`eopen` [Issue] - Opens a ticket for you to talk to the staff team one on one. Leave us alone, mom!\n\n\n`eclose` - Closes the ticket you're in. Only usable inside of your ticket channel! See you guys later, thanks for the help!", true)
  .addField("**__Fun Commands__**", "`edefaultdance` - Sends a GIF of the beloved default dance. How does it go again?\n\n\n`emango` - Just sends a mango. Fun!\n\n\n`ecursedimage` - Sends a random cursed image. Creeepy!", true)
  .setFooter(`Requested by ${message.author.username}#${message.author.discriminator} | Bot created by Taco#2942`)
  
  message.channel.send(hembed)
}

module.exports.help = {
  name: 'help',
  aliases: ['h', 'commands  ']
}
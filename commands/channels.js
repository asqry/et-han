const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
  let cembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription('Categories are in the normal Discord format, a down arrow (\⤵️) means the channels are inside of a category (To the right og the down arrow is the name of the category, categories are case sensitive)\n\nMake sure that the role called **\"E.T.Han\"** has the **\"Administrator\"** permission and is at the top of the role heiarchy (Above the highest role on the server)\n\n\n')
  .addBlankField()
  .addField("For the moderation features:", "\⤵️ Logging\n#kick-logs\n#ban-logs\n#reports", true)
  .addBlankField(true)
  .addBlankField(true)
  .addField("For the Ticket System", "\⤵️ Active Tickets\nTickets will go here when they are created, check this category often")
  .setFooter(`Requested by ${message.author.username}#${message.author.discriminator} | Bot created by Taco#2942`)
  
  message.channel.send(cembed)
}

module.exports.help = {
  name: 'channels',
  aliases: []
}
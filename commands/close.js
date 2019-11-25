const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
  let nickname = message.channel.name.split("ticket-")
  
  let ticket = message.guild.channels.find(ch => ch.name === `ticket-${nickname}`)
  
  if(!message.channel.name.includes("ticket-")){
    let embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("You can only use this command in ticket channels")
    
    message.channel.send(embed).then(msg => msg.delete(5000))
    
    return;
  }
  
  if(message.channel.name.includes("ticket-")){
    let closing = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription("Closing this ticket in 10 seconds... Please wait!")
    
    message.channel.send(closing).then(msg => msg.delete(9950))
      
    setTimeout(() => {
      message.channel.delete(ticket)
    }, 10000)
  }
}

module.exports.help = {
  name: 'close',
  aliases: []
}
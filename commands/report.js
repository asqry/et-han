const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
  message.delete()
  ///////
  const missingargs = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription("You are missing some arguments")
  .addField("Example Usage", "ereport @Taco#2942 Get Out of my Room, Mom!")
  //////
  let toreport = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  
  if(!toreport){
    message.channel.send(missingargs).then(msg => msg.delete(5000))
    
    return;
  }
  
  let reason = args.slice(1).join(" ")
  
  if(!reason){
    message.channel.send(missingargs).then(msg => msg.delete(5000))
    
    return;
  }
  
  let logs = message.guild.channels.find(c => c.name === "reports")
  
  let reported = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription(`${toreport} was reported`)
  .addField("Reported By", message.author, true)
  .addField("Reason", reason, true)
  
  logs.send(reported)
  
  message.channel.send(`***Successfully reported ${toreport} for \"${reason}\"***`).then(msg => msg.delete(5000))
  
}//end of cmd file

module.exports.help = {
  name: 'report',
  aliases: []
}
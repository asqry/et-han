const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
  message.delete()
  ///////
  const missingargs = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription("You are missing some arguments")
  .addField("Example Usage", "eban @Taco#2942 The Ban Hammer has been Dropped")
  //////
  let toban = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  
  if(!toban){
    message.channel.send(missingargs).then(msg => msg.delete(5000))
    
    return;
  }
  
  let reason = args.slice(1).join(" ")
  
  if(!reason){
    message.channel.send(missingargs).then(msg => msg.delete(5000))
    
    return;
  }
  
  if(!message.member.hasPermission("BAN_MEMBERS")){
    let noperms = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("You don't have permission to do that command")
    
    message.channel.send(noperms).then(msg => msg.delete(5000))
    
    return;
  }
  
  if(toban.hasPermission("ADMINISTRATOR")){
    let cantbebanned = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("That user cannot be banned")
    
    message.channel.send(cantbebanned).then(msg => msg.delete(5000))
    
    return;
  }
  
  let logs = message.guild.channels.find(c => c.name === "ban-logs")
  
  toban.ban()
  
  let logembed = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription(`${toban} was banned from the server`)
  .addField("Banned By", message.author, true)
  .addBlankField(true)
  .addField("Reason", reason, true)
  .addField("Time of Punishment", message.createdAt, true)
  
  logs.send(logembed)
  
  message.channel.send(`***${toban}*** was banned by ${message.author}`).then(msg => msg.delete(5000))
  
}//end of cmd file

module.exports.help = {
  name: 'ban',
  aliases: []
}
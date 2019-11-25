const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
  message.delete()
  ///////
  const missingargs = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription("You are missing some arguments")
  .addField("Example Usage", "ekick @Taco#2942 Buh bye!")
  //////
  let tokick = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  
  if(!tokick){
    message.channel.send(missingargs).then(msg => msg.delete(5000))
    
    return;
  }
  
  let reason = args.slice(1).join(" ")
  
  if(!reason){
    message.channel.send(missingargs).then(msg => msg.delete(5000))
    
    return;
  }
  
  if(!message.member.hasPermission("KICK_MEMBERS")){
    let noperms = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("You don't have permission to do that command")
    
    message.channel.send(noperms).then(msg => msg.delete(5000))
    
    return;
  }
  
  if(tokick.hasPermission("ADMINISTRATOR")){
    let cantbekicked = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("That user cannot be kicked")
    
    message.channel.send(cantbekicked).then(msg => msg.delete(5000))
    
    return;
  }
  
  let logs = message.guild.channels.find(c => c.name === "kick-logs")
  
  tokick.kick()
  
  let logembed = new Discord.RichEmbed()
  .setColor("RED")
  .setDescription(`${tokick} was kicked from the server`)
  .addField("Kicked By", message.author, true)
  .addBlankField(true)
  .addField("Reason", reason, true)
  .addField("Time of Punishment", message.createdAt, true)
  
  logs.send(logembed)
  
  message.channel.send(`***${tokick}*** was kicked by ${message.author}`).then(msg => msg.delete(5000))
  
}//end of cmd file

module.exports.help = {
  name: 'kick',
  aliases: []
}
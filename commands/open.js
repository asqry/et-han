const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete()
  
  const reason = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  const nickName = message.guild.members.get(message.author.id).displayName;
  const userConv = nickName.toLowerCase().replace(/ /g, "-");
  const active = message.guild.channels.find(
    ch => ch.name === "Active Tickets" && ch.type === "category"
  );

  const staff = message.guild.roles.find(r => r.name === "The Council");
  const member = message.guild.roles.find(r => r.name === "Citizens");
  const everyone = message.guild.roles.find(r => r.id === "602621078858367011");
  
  //583864153941475367

  if (!reason) {
    let missingargs = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("You are missing some arguments")
      .addField("Example Usage", "eopen I need an adult");

    message.channel.send(missingargs).then(msg => msg.delete(5000));

    return;
  }

  message.guild.createChannel(`ticket-${userConv}`, "text").then(c => {
    
    c.setParent(active);
    
    c.overwritePermissions(everyone, {
      READ_MESSAGES: false,
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false
    }),
      c.overwritePermissions(member, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false,
        VIEW_CHANNEL: false
      }),
      c.overwritePermissions(message.author, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
      }),
      c.overwritePermissions(staff, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true,
        VIEW_CHANNEL: true
      });


    let opened = new Discord.RichEmbed()
      .setColor("BLUE")
      .setDescription("Thank you for opening a ticket, " + message.author)
      .addField("Subject", reason);
    c.send(opened);

    c.send(
      "The staff will be right with you, please don't tag staff members excessively"
    );
  }); //end of createchannel
}; //end of cmd line

module.exports.help = {
  name: "open",
  aliases: ["create"]
};

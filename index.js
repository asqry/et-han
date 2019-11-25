const Discord = require('discord.js')
const fs = require('fs')
const config = require('./config.json')
const {prefix, token} = require('./config.json')
const bot = new Discord.Client({disableEveryone: true})

function loadCmds(){
    bot.commands = new Discord.Collection();
    bot.aliases = new Discord.Collection();

const load = dir => {
    fs.readdir(dir, (err, files) => {
        if(err) throw err;
        const jsfiles = files.filter(f => f.endsWith('.js'));

        jsfiles.forEach(f => {
            delete require.cache[require.resolve(`${dir}${f}`)];

            const props = require(`${dir}${f}`);
            console.log(`${f} loaded!`);
            
            bot.commands.set(props.help.name, props);
            if (props.help.aliases) props.help.aliases.forEach(alias => bot.aliases.set(alias, props.help.name));
        });
    });
}

load("./commands/");
}

loadCmds()

bot.on('ready', async() => {
    console.log("I\'m Ready!") //Sends "I'm Ready" to the console when the 
    console.log(prefix)
})

bot.on('message', async(message) => {
    if(message.author.bot) return; //Does nothing if the author of the message is a bot
    let prefix = config.prefix

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let command;

    if (!message.content.startsWith(prefix)) return;

    if (cmd.length == 0) return;
    if (bot.commands.has(cmd)) {
      command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
      command = bot.commands.get(bot.aliases.get(cmd));
    }

    if(command) command.run(bot, message, args);

//COMMANDS START HERE

    if(message.content.startsWith(`${prefix}ping`)){
        message.channel.send("Pong!")
    }

//COMMANDS END HERE
})

bot.login(token)
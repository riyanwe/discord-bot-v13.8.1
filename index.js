const { Client,  Intents, MessageEmbed, Collection } = require('discord.js');
const bot = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

require('dotenv').config();
var PREFIX = '>';
var version = '1.0.0';

const fs = require('fs');

const commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of files){
    const command = require(`./commands/${file}`);
    commands.set(command.name, command);
};

const channelId = '995676587255140353';
const channelIdRule = '995678845627801612';
bot.on('guildMemberAdd', (member) => {
    bot.channels.cache.get(channelId).send(`Halo <@${member.user.id}>! di server ${member.guild.name} jangan lupa baca rule di <#${channelIdRule}>!`)
})

bot.on('ready', ()=> {
    console.log('bot sudah ready');

    try{ bot.user.setActivity('>help', {
        type: "PLAYING"
    })} catch (e) { 
        console.error(e)};
});

bot.on('messageCreate', (message) => {
    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0])
    {
        case 'ping':
            commands.get('ping').execute(message);
        break;
        case 'info':
            commands.get('info').execute(message,args);
            break;
        case 'bot':
            commands.get('bot').execute(message);
            break;
        case 'help':
            commands.get('help').execute(message);
            break;
        case 'clear':
            commands.get('clear').execute(message,args);
            break;
        case 'delay':
            commands.get('delay').execute(message);
            break;
        case 'cooldown':
            commands.get('cooldown').execute(message);
            break;
    }
});


bot.login(process.env.TOKEN);
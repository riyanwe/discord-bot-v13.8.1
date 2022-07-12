const { MessageEmbed } = require('discord.js');
const botInfo = require('./botInfo.json');
module.exports = {
    name: 'help',
    description: 'ini adalah command help',
    execute(message){
        message.delete();
        const helpEmbed = new MessageEmbed()
        .setColor('GOLD')
        .setAuthor({name: 'Hiken BOT', iconURL: 'https://cdn.discordapp.com/attachments/986491468577398845/986512860333105182/unknown.png'})
        .setTitle('BOT Commands')
        .addField('PREFIX', botInfo.prefix)
        .addField('help', 'BOT Commands')
        .addField('info', 'Info Commands')
        .addField('ping', 'Ping BOT')
        .addField('bot', 'BOT Information')
        .setFooter({text: 'Powered by Hiken Store', iconURL: 'https://cdn.discordapp.com/attachments/986491468577398845/986512373844164638/unknown.png'});
        message.channel.send({ embeds: [helpEmbed] });
    }
}
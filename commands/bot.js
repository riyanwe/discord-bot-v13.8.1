const { MessageEmbed } = require('discord.js');
const botInfo = require('./botInfo.json');
module.exports = {
    name: 'bot',
    description: 'ini adalah command bot',
    execute(message){
        message.delete();
        const botEmbed = new MessageEmbed()
        .setColor('BLUE')
        .setTitle('Information BOT :')
        .setAuthor({name: 'Hiken BOT', iconURL: 'https://cdn.discordapp.com/attachments/986491468577398845/986512860333105182/unknown.png'})
        .addField('Version : ', botInfo.version, true)
        .addField('Author : ', message.author.username, true)
        .setDescription('Hiken BOT adalah bot yang di rancang oleh Hiken Asce menggunakan nodeJS dan discordJS')
        .setFooter({ text: 'Powered by Hiken Store', iconURL: 'https://cdn.discordapp.com/attachments/986491468577398845/986512373844164638/unknown.png'});
        message.channel.send({ embeds: [botEmbed] });
    }
}
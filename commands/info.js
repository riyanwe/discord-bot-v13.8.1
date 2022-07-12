const { MessageEmbed } = require('discord.js');
const botInfo = require('./botInfo.json');
module.exports = {
    name: 'info',
    description: 'ini adalah command info',
    execute(message, args){
        if (!args[1])
        {
            message.delete();
            const infoEmbed = new MessageEmbed()
            
            .setColor('YELLOW')
            .setTitle('Information :')
            .setAuthor({name: 'Hiken BOT', iconURL: 'https://cdn.discordapp.com/attachments/986491468577398845/986512860333105182/unknown.png'})
            .setDescription('Masukkan satu perintah setelah kata info')
            .addField('info author', 'Info Author')
            .addField('info version', 'Info BOT Version')
            .setFooter({ text: 'Powered by Hiken Store', iconURL: 'https://cdn.discordapp.com/attachments/986491468577398845/986512373844164638/unknown.png'});
            message.channel.send({ embeds: [infoEmbed] });
        } 
        else
        {
            if (args[1] === 'author')
            {
                message.delete();
                const authorEmbed = new MessageEmbed()
                .setColor('GREEN')
                .addField('Author : ', message.author.username)
                message.channel.send({ embeds: [authorEmbed] });
            }
            else if (args[1] === 'version')
            {
                message.delete();
                const versionBotEmbed = new MessageEmbed()
                .setColor('PURPLE')
                .addField('Version BOT : ', botInfo.version)
                message.channel.send({ embeds: [versionBotEmbed] });
            }
            else 
            {
                message.delete();
                const nothingFoundEmbed = new MessageEmbed()
                .setColor('AQUA')
                .addField('Wrong!', 'Command tidak ditemukan silahkan coba >help atau >info')
                message.channel.send({ embeds: [nothingFoundEmbed] });
            }
        }
    }
}
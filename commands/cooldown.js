const { Collection } = require('discord.js');
const cooldown = new Collection();

module.exports = {
    name: 'cooldown',
    description: 'ini adalah testing fitur cooldown',
    execute(message){
        if (cooldown.has(message.author.id)){
            message.reply('Tunggu 10 detik untuk menggunakan perintah ini lagi');
        }
        else {
            message.channel.send('Fitur Cooldown');
            cooldown.set(message.author.id);
            setTimeout(() => {
                cooldown.delete(message.author.id);
            }, 1000 * 10);
        }
    }
}
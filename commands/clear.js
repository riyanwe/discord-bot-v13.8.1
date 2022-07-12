module.exports = {
    name: 'clear',
    description: 'ini adalah command clear',
    execute(message, args) {
        if (!args[1]){
            return message.reply('Masukkan jumlah chat yang ingin dihapus');
        }
        message.channel.bulkDelete(args[1]);
    }
}
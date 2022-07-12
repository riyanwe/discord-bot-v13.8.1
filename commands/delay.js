module.exports = {
    name: 'delay',
    description: 'ini adalah testing fitur delay',
    execute(message){
        setTimeout(() => {
            message.channel.send('Fitur Delay 5 Detik');
        }, 1000 * 5);
    }
}
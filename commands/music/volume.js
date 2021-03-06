const Discord = require('discord.js');

module.exports = {
    name: "volume",
    category: "Music",
    run: async (client, message, args) => {
        let server = client.music[message.guild.id];

        if(server.dispatcher) {
            message.channel.send(new Discord.MessageEmbed().setTitle(`Set volume to ${args[0]}`));
            server.dispatcher.setVolume(args[0]/100);
        } else {
            message.channel.send(":x: | I am not in a voice channel.")
        }
    }
}
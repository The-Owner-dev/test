const Discord = require('discord.js');
const devs = ['716355498378788954', '550796758431694868', '742853857104887820', '486275291660943360', '329579395784376321', '203234887484833792', '490535372393021469', '478527909250990090', ]
module.exports = {
    name: "servers",
    aliases: ['s'],
    description: "serverlist",
    async run(client, message, args){
        const servers = message.client.guilds.cache.array().map(guild => {
            return `\`${guild.id}\` - **${guild.name}** - \`${guild.memberCount}\` members`;
    });

    const embed = new Discord.MessageEmbed()
            .setTitle('Server List')
            .setTimestamp()
            .setColor('RANDOM');

            if (!devs.includes(message.author.id)) {
                return message.channel.send("Sorry but only the developers who made me can use this command ❌");
            } else {
                message.channel.send(embed.setTitle(`server list`).setDescription(servers.join('\n')));
            }

    }
}
const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "warnings",
    aliases: ['infractions', 'warnlist', 'warns'],
    description: "warns a user",
    async run (client, message, args){
        if (!message.member.permissions.has("KICK_MEMBERS")) {
                return message.reply('you dont have the correct permissions to do that');
        } else {
            let mentionedUser = message.mentions.users.first();
            const warnings = db.get(`warnings_${mentionedUser}_${message.guild.id}`)
            const embed = new Discord.MessageEmbed()
                .setTitle(`${mentionedUser.username}s warnings`)
                .setDescription(warnings)
                .setFooter('dw jupiter still loves you ❤️')
                .setColor('GOLD')
            const noembed = new Discord.MessageEmbed()
                .setTitle('user has no warnings')
                .setColor('GOLD')
            if (warnings < 1) return message.channel.send(noembed)
            if (!mentionedUser) return message.channel.send('please mention a user')
            message.channel.send(embed)
            
        }
    }           
}
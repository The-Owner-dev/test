const db = require('quick.db');
const Discord = require('discord.js');
const DIG = require("discord-image-generation");

module.exports = {
    name: 'hitler',
    aliases: [''],

    async run(client, message, args){
        let mentionedUser = message.mentions.users.first() || message.author;
		let author = message.author;
        let avatar = mentionedUser.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Hitler().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "hitler.png");
        message.channel.send(attach)
    }
}
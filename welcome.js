const Canvas = require('discord-canvas');
const Discord = require('discord.js')
module.exports = (client) => {
    const welcomechannel = message.guild.channels.cache.find(ch => ch.name === '🙏welcome');

    client.on(`guildMemberAdd`, (member) => {
       
        const image = await new Canvas.Welcome()
        .setUsername(member.tag)
        .setMemberCount(guild.memberCount)
        .setGuildName(guild.name)
        .setAvatar(member.displayAvatarURL())
        .setColor("border", "#FFD700")
        .setBackground('https://adventures.com/media/6169/how-to-take-pictures-of-the-northern-lights-camera-tripod-4.jpg?quality=80&format=jpg')
        .toAttachment();

        const attachment = new Discord.MessageAttachment(image.toBuffer(), "welcome-image.png")

        message.channel.send(attachment)
        
    })
}
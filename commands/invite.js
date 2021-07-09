const Discord = require('discord.js')

module.exports = {
    name: 'invite',

    async run(client, message, args){

        let embed = new Discord.MessageEmbed()
        .setColor('GOLD')
        .setDescription(`If you want to invite me to you server [click here](https://discord.com/oauth2/authorize?client_id=809153753885442068&scope=bot&permissions=2147483647)!`) 

        message.channel.send(embed)
        
    }
}
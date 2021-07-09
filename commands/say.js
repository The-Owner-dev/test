module.exports = {
    name: "say",
    description: "says something",

    
    async run (client, message, args){  
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return
        if (message.content.includes("@everyone") || message.content.includes("nigger")) return 
        if (message.content.includes("@here") || message.content.includes("nigga")) return 
   

        let textChannel = message.mentions.channels.first()
        if(!args[1]) return message.channel.send('Provide a message to say!');
       
        message.delete()
            if(!textChannel) return message.channel.send(args.join(' '))
            if (!message.guild.channels.cache.has(textChannel.id)) return;
            msg = args.slice(1).join(" ");
            textChannel.send(msg)

        }
    }


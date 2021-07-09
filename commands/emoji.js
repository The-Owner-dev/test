module.exports = {
    name: "emoji",
    
    async run(client, message, args){

        if(!message.member.hasPermission('MANAGE_SERVER')) return
        let emojilink = args[0]
        let emojiname = args[1]

        if(!emojilink) return message.channel.send('Please send an image link!')
        if(!emojiname) return message.channel.send('Please send the name you want this emoji to be called!')

        let guild = message.guild;

        guild.emojis.create(emojilink, emojiname)
        
       let finalemoji = message.guild.emojis.cache.find(emoji => emoji.name === emojiname);

        message.channel.send(`**Successfully created a new emoji**`)
    }
}
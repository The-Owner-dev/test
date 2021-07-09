const { MessageEmbed } = require("discord.js");


module.exports = {
  info: {
    name: "remove",
    description: "Remove song from the queue",
    usage: "rm <number>",
    aliases: ["rm"],
  },
  async run(client, message, args) {
   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.",message.channel).catch(console.error);
    if (!args.length) return message.channel.send(`Usage: ${client.config.prefix}\`remove <Queue Number>\``);
    if (isNaN(args[0])) return message.channel.send(`Usage: ${client.config.prefix}\`remove <Queue Number>\``);
    if (queue.songs.length == 1) return message.channel.send("There is no queue.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return message.channel.send(`The queue is only ${queue.songs.length} songs long!`,message.channel).catch(console.error);
try{
    const song = queue.songs.splice(args[0] - 1, 1); 
    message.channel.send(`❌ **|** Removed: **\`${song[0].title}\`** from the queue.`,queue.textChannel).catch(console.error);
                   message.react("✅")
} catch (error) {
        return sendError(`:notes: An unexpected error occurred.\nPossible type: ${error}`, message.channel);
      }
  },
};
const Discord = require('discord.js');
const chalk = require('chalk');
const fs = require('fs')
const db = require('quick.db')
require('dotenv').config();




const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const statuses = ['The stars || {prefix}help', 'the stars || {prefix}help', 'ur mom || {prefix}help', '@everyone || {prefix}help', 'The other planets || {prefix}help']
client.once("ready", async ()  => {
    var totalMembers = 0;
        client.guilds.cache.forEach(guild => {
var x = parseInt(guild.memberCount);
totalMembers = totalMembers + x;
})
client.user.setUsername("Jupiter");

    console.log(chalk.green(`> jupiter is online in ${client.guilds.cache.size} servers || serving ${client.users.cache.size} members`))
    console.log(chalk.green(`> logged in as ${client.user.tag} ID: ${client.user.id}`))
    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)]

        client.user.setActivity(status, {
                type: "WATCHING"
        })
}, 20000)



/*client.on('message', async message =>{
    const usersMap = new Map();
    const LIMIT = 5;
    const TIME = 7000;
    const DIFF = 3000;
    */
    client.on('message', async(message) => {
        db.add(`Messages_${message.guild.id}_${message.author.id}`, 1)
     
        /* if(message.author.bot) return;
        if(usersMap.has(message.author.id)) {
            const userData = usersMap.get(message.author.id);
            const { lastMessage, timer } = userData;
            const difference = message.createdTimestamp - lastMessage.createdTimestamp;
            let msgCount = userData.msgCount;
            console.log(difference);
    
            if(difference > DIFF) {
                clearTimeout(timer);
                console.log('Cleared Timeout');
                userData.msgCount = 1;
                userData.lastMessage = message;
                message.channel.setRateLimitPerUser(0)
                userData.timer = setTimeout(() => {
                    usersMap.delete(message.author.id);
                    console.log('Removed from map.')
                }, TIME);
                usersMap.set(message.author.id, userData)
            }
            else {
                ++msgCount;
                if(parseInt(msgCount) === LIMIT) {
                    message.channel.setRateLimitPerUser(10)
                    
                 } if(parseInt(msgCount) > LIMIT) {
                    message.channel.setRateLimitPerUser(20)
                 }else {
                    userData.msgCount = msgCount;
                    usersMap.set(message.author.id, userData);
                }
            }
        }
        else {
            let fn = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, {
                msgCount: 1,
                lastMessage : message,
                timer : fn
            });
        }
    })

   */

    if (message.author.bot) return;
    if (!message.guild) return;

    
       
    if (message.channel.type != 'dm' && !message.author.bot) {
        const permissions = message.channel.permissionsFor(message.client.user);
        if (!permissions.has('SEND_MESSAGES')) return; 
     
        var prefix = await db.get(`prefix.${message.guild.id}`);
        if (prefix === null || prefix === undefined) {
            await db.set(`prefix.${message.guild.id}`, '!');
            prefix = '!'
  
       
        }
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) || client.commands.find(c => c.aliases && c.aliases.includes(commandName));

        if(command) command.run(client, message, args);
        db.add(`Commands_${message.author.id}`, 1)
    }})

})


client.login(process.env.DISCORD_TOKEN); 

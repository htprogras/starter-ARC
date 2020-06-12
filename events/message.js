//require
const Discord = require('discord.js')
const prefix = require('../settings.json').prefix

module.exports = (client, message) => {
    //verify
    if(message.author.bot) return
    if(message.channel.type === 'dm') return
    if(!message.content.startsWith(prefix)) return
    //args
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commande = args.shift()
    //if command exist
    const command = client.commands.get(commande)

    if(!command) return
    //exec command
    command.run(client, message, args)
    //command executed
    console.log(commande + " -> " + message.author.username)
}

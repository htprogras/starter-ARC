//require
const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {
    //time
    let debut = await Date.now()
    //send message
    message.reply('ping').then((message) => {
        message.edit(`ping : ${Date.now() - debut} ms`)
    })
}

module.exports.help = {
    name: 'ping'
}
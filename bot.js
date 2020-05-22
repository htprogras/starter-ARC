//import
const Discord = require('discord.js')
const fs = require('fs')
const config = require('./settings')
//client
const client = new Discord.Client()
client.commands = new Discord.Collection()
//events
fs.readdir('./events', (err, files) => {
    //not events found
    if(files.length === 0){
        console.log("not events found")
        return
    }
    files.forEach(file => {
        const events = require('./events/' + file)//require files 
        const event  = file.split('.')[0]

        client.on(event, events.bind(null, client))
    })
})
//commands
fs.readdir('./commands', (err, files) => {
    //read commands
    const commandes = files.filter(file => file.split('.').pop() === 'js')
    //not commands found
    if(commandes.length === 0){
        console.log("not command found")
        return
    }
    //load file
    commandes.forEach(file => {
        let commande = require('./commands/' + file)
        console.log(commande.help.name + ' load !')
        client.commands.set(commande.help.name, commande)
    })
})

//client login
client.login(config.token)
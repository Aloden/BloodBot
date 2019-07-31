module.exports.run = async(client, message, args) => {
  const Discord = require('discord.js')
  const fs = require('fs')
  const giveawayFile = require('./giveaway.json')
  giveawayFile.giveaway.push(message.author.id)

  fs.writeFile('./giveaway.json', JSON.stringify, err => {
    console.log(err)
  })
}
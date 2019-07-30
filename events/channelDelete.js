module.exports = async(client, channel) => {
  const Discord = require('discord.js')
  const logs = channel.guild.channels.find(c => c.name === 'logs')
  const embed = new Discord.RichEmbed()
    .setTitle('Un salon a été supprimer.')
    .addField('Salon:', channel.name)
    .addField('Heure:', new Date())
    .setFooter('Ceci est un message de logs automatique.')
    .setColor('#ff0000')
  logs.send(embed)
}
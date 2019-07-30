module.exports = async(client, channel) => {
  const Discord = require('discord.js')
  const logs = channel.guild.channels.find(c => c.name === 'logs')
  const embed = new Discord.RichEmbed()
    .setTitle('Un nouveaux salon a été créer!')
    .addField('Salon:', channel)
    .addField('Heure:', new Date())
    .setFooter('Ceci est un message de logs automatique.')
    .setColor('#ff9900')
  logs.send(embed)
}
module.exports.run = async(client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return;
  const Discord = require('discord.js')
  let embed = new Discord.RichEmbed()
    .setTitle('Voici le prix des Minerais sur le BloodLust Shop')
    .addBlankField()
    .addField('Fer cuit', 'Pas encore fixer', true)
    .addField('Ore cuit', 'Pas encore fixer', true)
    .addField('Diamand cuit', 'Pas encore fixer', true)
    .addField('Améthyste cuit', '70$ unité', true)
    .addField('Titane cuit', '90$ unité', true)
    .addField('Paladium cuit', '1500$ unité', true)
    .addBlankField()
    .addField('Fer non cuit', 'Pas encore fixer', true)
    .addField('Ore non cuit', 'Pas encore fixer', true)
    .addField('Diamand non cuit', 'Pas encore fixer', true)
    .addField('Améthyste non cuit', '120$ unité', true)
    .addField('Titane non cuit', '180$ unité', true)
    .addField('Paladium non cuit', '2750$ unité', true)
    .addBlankField()
    .addField('Quartz Block', '800$ par stack', true)
    .setFooter('Pour achetez des minerais, rendez-vous dans #ticket')
    .setColor('#ff5500')
  message.channel.send(embed)
}
module.exports.run = async(client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return;
  const Discord = require('discord.js')
  let embed = new Discord.RichEmbed()
    .addBlankField()
    .setTitle('Voici le prix des graines sur le BloodLust Shop')
    .addField('Graines de Blés', '1500$ par stack', true)
    .addField('Graines de Pastèques: ', '300$ par stack', true)
    .addField('Graines d\'Améthyste:', '750$ par stack', true)
    .addField('Graines de Titane:', '1000$ par stack', true)
    .addField('Graines de Paladium:', '35000$ par stack', true)
    .addField('Graines d\'Endium: ', 'Pas encore de prix fixer.', true)
    .setFooter('Pour achetez des graines, rendez-vous dans #ticket')
    .setColor('#33cc33')
  message.channel.send(embed)
}
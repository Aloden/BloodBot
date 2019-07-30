const Discord = require('discord.js')
const ms = require('ms')

module.exports.run = async(client, message, args) => {
  if(!message.member.roles.find(r => r.name === 'Fondateur')) return message.channel.send(`Vous n'avez pas la permission d'executer cette commande.`)

  const Discord = require('discord.js')
  let toMute = message.mentions.members.first(); 
  let muteTime = args[1]
  let muteReason = args.slice(2).join(' ');
  if(!muteReason) return message.channel.send('Vous devez donner une raison.')
  
  if(!toMute) {
    try {
      if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error(' ');
      toMute = message.guild.members.get(args.slice(0, 1).join(' '));
      toMute = user.user;
    } catch(error) {
      message.channel.send('Vous n\'avez pas donner d\'utilisateur')
    }
  }

  if(toMute === message.author) return message.channel.send('Vous ne pouvez pas vous mute vous même...')

  let muteRole = message.guild.roles.find(r => r.name === 'Muted')
  if(!muteRole) {
    try {
      muteRole = await message.guild.createRole({
        name: 'Muted',
        color: '#000000',
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muteRole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch(error) {
      console.log(error)
    }
  }
  await toMute.addRole(muteRole.id);
  try {
    toMute.send(`Vous avez été mute pour **${muteReason}**, pendant **${muteTime}**`)
  } catch(error) {
    message.channel.send('L\'utilisateur a bloquer ses mp, je ne peux donc pas lui dire qu\'il a été mute.')
  }
  let channelEmbed = new Discord.RichEmbed()
    .setTitle(`L'utilisateur ${toMute.username} à été mute`)
    .addField('Durée:', muteTime)
    .addField('Raison:', muteReason)
    .setThumbnail(toMute.avatarURL)
    .setTimestamp()
    .setColor('#cc1212')
  const m = await message.channel.send(channelEmbed)
  m.delete(10000)
  let logsEmbed = new Discord.RichEmbed()
    .setTitle(`Un utilisateur à été tempmute.`)
    .addField('Utilisateur:', toMute)
    .addField('Modérateur', message.author)
    .addField('Durée:', muteTime)
    .addField('Date:', message.createdAt)
    .setTimestamp()
    .setColor('#cc1212')
  setTimeout(function(){
    try{
      toMute.removeRole(muteRole.id)
    } catch(error) {
      console.log(error)
    }
  }, ms(muteTime));
}

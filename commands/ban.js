module.exports.run = async(client, message) => {
  if(!message.member.roles.find(r => r.name === 'modérateur')) return message.channel.send(`vous n'avez pas la permission d'executer cette commande.`)
  
  const Discord = require('discord.js')
  const args = message.content.split(' ').slice(1);
  const user = message.mentions.users.first(); 
  const banReason = args.slice(1).join(' ');

  if(!user) {
    try {
      if (!message.guild.members.get(args.slice(0, 1).join(' '))) throw new Error(' ');
      user = message.guild.members.get(args.slice(0, 1).join(' '));
      user = user.user;
    } catch(error) {
      message.channel.send('Il n\'y a pas d\'utilisateur mentionner ou avec cet ID.')
    }
  }
  if(user === message.author) return message.channel.send('Vous ne pouvez pas vous ban vous même...')
  
  const channelEmbed = new Discord.RichEmbed()
  .setTitle(`L'utilisateur ${user.username} a bien été ban.`)
  .addField('Date:', message.createdAt)
  .addField('Moderateur:', message.author.username)
  .addField('Utilisateur Ban:', user.username)
  .addField('Raison:', banReason)
  .setTimestamp(new Date)
  .setThumbnail(user.avatarURL)
  .setColor('#cc1212')

  const m = await message.channel.send(channelEmbed)
  await message.guild.ban(user)
  m.delete(10000)
}
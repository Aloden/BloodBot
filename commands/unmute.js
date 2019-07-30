module.exports.run = async(client, message, args) => {
  message.delete()
  if(!message.member.roles.find(r => r.name === '🚨 Modérateur En Test'))  return message.channel.send('Vous n\'avez pas la permission d\'executer cette commande')
  let muteRole = message.guild.roles.find(r => r.name === 'Muted')
  let unmuted = message.mentions.members.first()
  if(!unmuted) return message.channel.send('Vous devez spécifiez un utilisateur.')
  unmuted.removeRole(muteRole)
  const m = await message.channel.send('L\'utilisateur à bien été unmute.')
  await m.delete(5000)
}
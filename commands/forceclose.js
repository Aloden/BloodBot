module.exports.run = async(client, message, args) => {
  message.delete()
  if(!message.member.hasPermissions('ADMINISTRATOR')) return;
  if(!message.channel.name.includes('achat') || message.channel.name.includes('candidature') ||message.channel.name.includes('support')) return message.channel.send('Ce salon n\'est pas un salon de ticket.')
  const m = await message.channel.send('Je vais supprimer ce salon dans 10s...')
  setTimeout(function() {
    message.channel.delete()
  }, 10000)
}
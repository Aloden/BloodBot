module.exports.run = async(client, message, args) => {
  if(!message.member.roles.find(r => r.name === '🚨 Modérateur En Test')) return message.channel.send('Vous n\'avez pas la permission d\'executez la commande >clear')
  let nb = parseInt(args[0])
  if(nb < 2) return message.channel.send('Vous devez donner une quantité de messages supérieur à 1')
  if(!nb) return message.channel.send('Vous devez donner une quantité de messages a supprimer.')
  await message.channel.bulkDelete(nb)
  const m = await message.channel.send(`J'ai supprimer ${nb} messages!`)
  m.delete(5000)
  
}
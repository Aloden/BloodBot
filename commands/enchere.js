module.exports.run = async(client, message, args) => {
  console
  const Discord = require('discord.js')
  const ms = require('ms')
  //const key = message.author.id
  const key = 1
  if(!message.member.roles.find(r => r.name === '📥 Vendeur Confirmer')) return message.channel.send('Vous n\'avez pas la permission d\'executer cette commande.')
  let temp = ms(args[0])
  if(!temp) return message.channel.send('Vous devez precisez une duré pour l\'enchère')
  let recompense = args.slice(2).join(' ')
  if(!recompense) return message.channel.send('Vous devez précisez une récompense pour l\'enchère.')
  let prixActuel = parseInt(args[1])
  if(!prixActuel) return message.channel.send('Vous devez précisez un prix de départ.')
  let enchereurActuel = message.author.username
  message.channel.send(recompense)
  client.enchere.ensure(key, {
    temp: temp,
    recompense: recompense,
    prixActuel: prixActuel,
    enchereurActuel: enchereurActuel,
    vendeur: message.author.username
  })
  client.enchere.set(key, temp, temp)
  client.enchere.set(key, recompense, recompense)
  client.enchere.set(key, prixActuel, prixActuel)
  client.enchere.set(key, enchereurActuel, enchereurActuel)

  const enchereChannel = message.guild.channels.find(c => c.name === 'encheres')
  let embed = new Discord.RichEmbed()
    .setTitle('Une nouvelle enchère a commencer!')
    .addField('Objet a enchérir:', recompense)
    .addField('Durée restante de l\'enchère', temp + ' secondes')
    .addField('Prix actuel:', prixActuel)
    .addField('Enchériseur actuel:', 'Personne n\'a encore sur-enchérie sur cette enchère...')
    .addField('Vendeur:', message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setFooter(key)
  const m = await enchereChannel.send(embed)
  await m.react('605812753185374208')
  await m.react('605812831245434910')
  await m.react('605813063773585428')
  async function intervalFunc() {
    let oldTime = parseInt(client.enchere.get(key, temp))
    let newTime = oldTime - 2000
    let shownTime = newTime / 1000
    client.enchere.set(key, newTime, temp)
    console.log(key)
    let newEmbed = new Discord.RichEmbed()
      .setTitle('Une nouvelle enchère a commencer!')
      .addField('Objet a enchérir:', client.enchere.get(key, recompense))
      .addField('Durée restante de l\'enchère', shownTime + ' secondes')
      .addField('Prix actuel:', client.enchere.get(key, prixActuel))
      .addField('Enchériseur actuel:', 'Personne n\'a encore sur-enchérie sur cette enchère...')
      .addField('Vendeur:', message.author.username)
      .setThumbnail(message.author.avatarURL)
      .setFooter(key)
    await m.edit(newEmbed)
    if(newTime < 1) {
      let finitEmbed = new Discord.RichEmbed()
        .setTitle('Cette enchère est terminée!')
        .addField('Objet:', client.enchere.get(key, recompense))
        .addField('Gagnant', client.enchere.get(key, enchereurActuel))
        .addField('Prix:', client.enchere.get(key, prixActuel))
        .addField('Vendeur:', message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setFooter(key)
      m.edit(finitEmbed)
      m.clearReactions()
      clearInterval(this)
      
    }
  }
  setInterval(intervalFunc, 2000).catch((error) => {
    console.log(error)
  })
}
module.exports = async(client, messageReaction, user) => {
  const Discord = require('discord.js')
  const Enmap = require('enmap')
  const message = messageReaction.message
  //Salon pour creer les tickets
  if(message.channel.id === '605081461162377243') {
    if(messageReaction.emoji.name === '💳') { 
      messageReaction.remove(user.id)
      console.log(message.guild.channels.some(c => c.name === `${user.username}-candidature-vendeur`))
      if(!message.guild.channels.some(c => c.name === `${user.username.toLowerCase()}-candidature-vendeur`)) {
        let category = message.guild.channels.find(c => c.name === '📃 Candidatures' && c.type === 'category')
        message.guild.createChannel(`${user.username}-candidature-vendeur`, {
          parent: category.id
        }).then(async (c) => {
          let everyone = message.guild.roles.find(r => r.name === '@everyone')
          let modRole = message.guild.roles.find(r => r.name === '🔱 Chef Modérateur')
          c.overwritePermissions(everyone, {
            READ_MESSAGES: false,
            SEND_MESSAGES: false
          })
          c.overwritePermissions(modRole, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
          })
          c.overwritePermissions(user, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
          })
          const m = await message.channel.send(`${user} J'ai créer ton salon, ${c}`)
          await m.delete(5000)
        })
      } else {
        const dejaC = message.guild.channels.find(c => c.name === `${user.username.toLowerCase()}-candidature-vendeur`)
        const dejam = await message.channel.send(`${user} Il semble que vous avez déja un salon de ce type, ${dejaC}`)
        await dejam.delete(5000)
      }
    } else if(messageReaction.emoji.name === '📁') {
      messageReaction.remove(user.id)
      console.log(message.guild.channels.some(c => c.name === `${user.username.toLowerCase()}-candidature-staff`))
      if(!message.guild.channels.some(c => c.name === `{user.username.toLowerCase()}-candidature-staff`)) {
        let category = message.guild.channels.find(c => c.name === '📃 Candidatures' && c.type === 'category')
        message.guild.createChannel(`${user.username}-candidature-staff`, {
          parent: category.id
        }).then(async (c) => {
          let everyone = message.guild.roles.find(r => r.name === '@everyone')
          let modRole = message.guild.roles.find(r => r.name === '🔱 Chef Modérateur')
          c.overwritePermissions(everyone, {
            READ_MESSAGES: false,
            SEND_MESSAGES: false
          })
          c.overwritePermissions(modRole, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
          })
          c.overwritePermissions(user, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
          })
          const m2 = await message.channel.send(`${user} J'ai créer ton salon, ${c}`)
          await m2.delete(5000)
        })
      } else {
        const dejaC = message.guild.channels.find(c => c.name === `${user.username.toLowerCase()}-candidature-staff`)
        const dejam = await message.channel.send(`${user} Il semble que vous avez déja un salon de ce type, ${dejaC}`)
        await dejam.delete(5000)
      }
    } else if(messageReaction.emoji.name === '💰') {
      messageReaction.remove(user.id)
      if(!message.guild.channels.find(c => c.name === `${user.username.toLowerCase()}-achat`)) {
        let category = message.guild.channels.find(c => c.name === '💰 Achats' && c.type === 'category')
        message.guild.createChannel(`${user.username}-achat`, {
          parent: category.id
        }).then(async (c) => {
          let everyone = message.guild.roles.find(r => r.name === '@everyone')
          let modRole = message.guild.roles.find(r => r.name === '🔱 Chef Modérateur')
          let mRole = message.guild.roles.find(r => r.name === '📩 Vendeur En Test')
          c.overwritePermissions(everyone, {
            READ_MESSAGES: false,
            SEND_MESSAGES: false
          })
          c.overwritePermissions(modRole, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
          })
          c.overwritePermissions(user, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
          })
          c.overwritePermissions(mRole, {
            READ_MESSAGES: true, 
            SEND_MESSAGES: true
          })
          const m3 = await message.channel.send(`${user} J'ai créer ton salon, ${c}`)
          await m3.delete(5000)
        })
      } else {
        const dejaC = message.guild.channels.find(c => c.name === `${user.username.toLowerCase()}-achat`)
        const dejam = await message.channel.send(`${user} Il semble que vous avez déja un salon de ce type, ${dejaC}`)
        await dejam.delete(5000)
      }
    } else if(messageReaction.emoji.name === '💡') {
      if(!message.guild.channels.find(c => c.name === `${user.username.toLowerCase()}-support`)) {
        messageReaction.remove(user.id)
        let category = message.guild.channels.find(c => c.name === '💡 Tickets' && c.type === 'category')
        message.guild.createChannel(`${user.username}-support`, {
          parent: category.id
        }).then(async (c) => {
          let everyone = message.guild.roles.find(r => r.name === '@everyone')
          let modRole = message.guild.roles.find(r => r.name === '🔱 Chef Modérateur')
          let mRole = message.guild.roles.find(r => r.name === '🚨 Modérateur En Test')
          c.overwritePermissions(everyone, {
            READ_MESSAGES: false,
            SEND_MESSAGES: false
          })
          c.overwritePermissions(modRole, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
          })
          c.overwritePermissions(user, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
          })
          c.overwritePermissions(mRole, {
            READ_MESSAGES: true, 
            SEND_MESSAGES: true
          })
          const m4 = await message.channel.send(`${user} J'ai créer ton salon, ${c}`)
          await m4.delete(5000)
        })
      } else {
        const dejaC = message.guild.channels.find(c => c.name === `${user.username.toLowerCase()}-support`)
        const dejam = await message.channel.send(`${user} Il semble que vous avez déja un salon de ce type, ${dejaC}`)
        await dejam.delete(5000)
      }
      
    }
  } else if(message.channel.id === '605782015547015168') {
    const vendeur = message.guild.fetchMember(message.embeds[0].footer.text)
    //const key = vendeur.id
    if(user.bot) return;
    const key = 1
    //+500
    if(messageReaction.emoji.id === '605812831245434910') {
      const oldPrix = parseInt(client.enchere.get(key, prixActuel))
      const newPrix = oldPrix + 500
      client.enchere.set(key, prixActuel, newPrix)
    }
  }
}
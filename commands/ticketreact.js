module.exports.run = async(client, message, args) => {
  const channel = message.guild.channels.find(c => c.name === 'tickets')
  await channel.fetchMessage('605082610544410625').then(async (msg) => {
    await msg.react('📁')
    await msg.react('💳')
    await msg.react('💰')
    await msg.react('💡')
  })
}
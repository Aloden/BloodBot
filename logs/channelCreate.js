module.exports = async(client, channel) => {
  const message = channel.message
  const logs = channel.guild.channels.find(c => c.name === 'logs')
  logs.send('gros test sa grand mere')
}
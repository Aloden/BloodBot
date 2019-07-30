const Canvas = require('canvas')
const Discord = require('discord.js')

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

module.exports = async(client, member, args) => {
  let newRole = member.roles.get(r => r.name === 'Visiteur')
  member.addRole(newRole)
  let aeroport = member.guild.channels.find(ch => ch.name === 'aeroport');
  if (!aeroport) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('/root/discord/BloodBot/wallpaper.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '28px bold sans-serif';
	ctx.fillStyle = '#0099ff';
	ctx.fillText('Bienvenue sur le serveur,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#0099ff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	aeroport.send(attachment);
	member.send('**__Bienvenue sur le serveur du BloodLust Shop.__**\n Si tu a besoin d\'aide, n\'hesite pas a effectuer la commande >help dans le #commandes-bots, et je pourrais t\'aider dans tout ce qui concerne le Shop, ou même paladium!')
}
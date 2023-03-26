const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll between 1 and 1005'),
	async execute(interaction) {
		return interaction.reply(`You get number ${Math.floor(Math.random() * (1005 - 1 + 1) + 1)}`);
	},
};

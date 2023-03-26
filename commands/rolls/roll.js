const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Roll between a first and second number, 0-9999 at lowest and highest.')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Roll interval')
				.setRequired(true)),
	async execute(interaction) {
		const input = interaction.options.getString('input') ?? 'No input provided';
		console.log(/\d{1,3}(-)\d{1,3}/.test(input));

		if (/^\d{1,4}(-)\d{1,4}$/.test(input)) {
			const values = input.split('-');
			//	Logs the number so I can confirm this stuff locally in my console. We don't want none of those suspicious rolls, am I right?
			console.log(values[0], values[1]);
			await interaction.reply(`You get number ${Math.floor(Math.random() * (parseInt(values[1]) - parseInt(values[0])) + parseInt(values[0]))}`);
		} else {
			await interaction.reply('Please set the numbers from 0 and up to 9999 (maximum 4 digits)');
		}
	},
};

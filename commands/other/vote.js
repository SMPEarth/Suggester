const { support_invite } = require("../../config.json");
const { string } = require("../../utils/strings");
module.exports = {
	controls: {
		name: "vote",
		permission: 10,
		usage: "vote",
		description: "Help support the bot!",
		enabled: true,
		permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"],
		dmAvailable: true,
		docs: "sumup"
	},
	do: async (locale, message) => {
		return message.channel.send(string(locale, "VOTE_INFO", { link: `<https://discord.gg/${support_invite}>`, links: `<${Object.values(module.exports.lists).join(">\n<")}>` }));
	},
	lists: {
		"topgg": "https://top.gg/bot/564426594144354315/vote",
		"bfd": "https://botsfordiscord.com/bot/564426594144354315/vote",
		"dbl": "https://discordbotlist.com/bots/564426594144354315/upvote",
		"bod": "https://bots.ondiscord.xyz/bots/564426594144354315/review"
	}
};

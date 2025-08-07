const { coreLog } = require("../../utils/logs");

module.exports = {
	controls: {
		name: "reboot",
		permission: 0,
		aliases: ["shutdown", "restart"],
		usage: "reboot (shard id)",
		description: "Reboots the bot by exiting the process",
		examples: "`{{p}}reboot`\nReboots all shards of the bot\n\n`{{p}}reboot 2`\nReboots shard 2",
		enabled: true,
		permissions: ["VIEW_CHANNEL", "SEND_MESSAGES", "ADD_REACTIONS", "USE_EXTERNAL_EMOJIS", "READ_MESSAGE_HISTORY"]
	},
	do: async (locale, message, client, args) => {
		let toReboot = args[0] || "all";

		await coreLog(`🔌 ${message.author.username} (\`${message.author.id}\`) initiated a reboot`, client);
		await message.channel.send(`Rebooting ${toReboot !== "all" ? `shard ${toReboot}` : "all shards"}...`);
		if (toReboot === "all") return client.shard.respawnAll();
		await client.shard.broadcastEval(`if (this.shard.ids[0] === ${toReboot}) process.exit()`);
	}
};

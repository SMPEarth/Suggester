const { post } = require("axios");

// Yeah, yeah yeah I know this is bad but This will work :D
module.exports = {
	/**
     * Send a suggestion to the suggestion channel
     * @param {String} channel - Channel id
     * @param {String} message - message id
     * @param {String} name - Name of the thread
     * @param {import('discord.js').Client} client - Discord.js client
     * @returns {Promise<Response>}
     */
	createThread: async (channel, message, name, client) => {
		const tname = name.length > 100 ? name.substring(0, 97) + "..." : name;

		return await post(
			`https://discord.com/api/v9/channels/${channel}/messages/${message}/threads`,
			{
				name: tname,
				auto_archive_duration: 4320,
				type: 11
			},
			{
				headers: {
					Authorization: `Bot ${client.token}`,
					"Content-Type": "application/json",
					"X-Audit-Log-Reason": "Created Thread for accepted Submission"
				}
			}
		);
	}
};

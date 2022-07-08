import { Client, Intents, AnyChannel, TextChannel, MessageActionRow, MessageButton } from 'discord.js';

class DiscordClient {
    client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

    constructor() {
        this.client.login(process.env.DISCORD_TOKEN);
    }

    createNewGame(roomId: string) {
        try {
            const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Rejoindre')
					.setStyle('PRIMARY'),
			);

            let channel: AnyChannel | undefined = this.client.channels.cache.find(channel => channel.id === '991714490339037314');
            (channel! as TextChannel).send({content: `New game here omg token : ${roomId}`, components: [row]});
            
            return;
        } catch (e) {
            return;
        }
    }
}

const discordClient = new DiscordClient();

export default discordClient;
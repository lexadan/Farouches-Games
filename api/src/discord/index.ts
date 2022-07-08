import { AnyChannel, TextChannel } from './../../node_modules/discord.js/typings/index.d';
import { Client, Intents } from 'discord.js';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

class DiscordClient {
    client = new Client({intents: [Intents.FLAGS.GUILDS]});

    constructor() {
        client.login(process.env.DISCORD_TOKEN);
    }

    createNewGame(roomId: string) {
        try {
            let channel: AnyChannel | undefined = client.channels.cache.find(channel => channel.id === '991714490339037314');
            (channel! as TextChannel).send(`New game here omg token : ${roomId}`);
            return;
        } catch (e) {
            return;
        }
    }
}

const discordClient = new DiscordClient();

export default discordClient;
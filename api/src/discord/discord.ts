import { triggerAsyncId } from 'async_hooks';
import { Client, Intents, AnyChannel, TextChannel, MessageActionRow, MessageButton } from 'discord.js';

class DiscordClient {
    client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

    constructor() {
        this.client.login(process.env.DISCORD_TOKEN);
    }

    
    async createNewGame(roomId: string) {
        const filter = () => {
            return true;
        }

        try {
            let channel: AnyChannel | undefined = this.client.channels.cache.find(channel => channel.id === '991714490339037314');
            const message = await (channel! as TextChannel).send({content: `New game here omg token : ${roomId}`});
            
            await message.react('✅');
            const collector = message.createReactionCollector({filter, time: 100000, max: 15});

            collector.on('collect', (reaction, user) => {
                if (this.client.user?.id === user.id) return;
                if (reaction.emoji.name === '✅') {
                    user.send(`http://localhost:2000/games/fculture?discordId=${user.id}&lobbyId=${roomId}`);
                }
            })
            return;
        } catch (e) {
            return;
        }
    }
}

const discordClient = new DiscordClient();

export default discordClient;
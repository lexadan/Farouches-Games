import * as redis from 'redis';
import { json } from 'stream/consumers';

class RedisCLient {
    client = redis.createClient({
        socket: {
            host: 'redis-server',
            port: 6379
        }
    });
    private connected: boolean = false;

    constructor() {
        this.client.connect().then(() => {
            this.connected = true;
        });
    }

    async getAllPlayers(roomId: any) {
        return new Promise((resolve, reject) => {
            this.client.SMEMBERS(roomId).then(async (playersId: any[]) => {
                const res: any[] = [];
                for await (const id of playersId) {
                    let data = await this.client.HGETALL(id);
                    res.push(data);
                }
                resolve(res);
            })
        })
    }
}

const redisCLient = new RedisCLient();

export default redisCLient;
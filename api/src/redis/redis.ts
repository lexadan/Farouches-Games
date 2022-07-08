import * as redis from 'redis';

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
}

const redisCLient = new RedisCLient();

export default redisCLient;
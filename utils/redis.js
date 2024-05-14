//The RedisClient Class
import { createClient } from 'redis';

class RedisClient {
    constructor(){
	this.client = createClient();
	this.connected = true;
	this.client.on('error', err => console.log(err));
	this.connected = false
	this.client.on('connect', () => console.log('Connected Successfully'));
	this.connected = true;
    }

    async isAlive(){
	return this.connected;
    }

    async get(key){
	const value = await this.client.get(key);
	return value;
    }

    async set(key, value, time){
	await this.client.set(key, value, 'EX', time);
    }

    async del(key){
	await this.client.del(key);
    }
}
const redisClient = new RedisClient();
module.exports = redisClient;

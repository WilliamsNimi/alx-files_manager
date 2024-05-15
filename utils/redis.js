//The RedisClient Class
import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
    constructor(){
	this.client = createClient();
	this.connected = true;
	this.client.on('error', err => {
	    console.log(err)
	    this.connected = false;
	});
	this.client.on('connect', () => {
	    console.log('Connected Successfully')
	    this.connected = true;
	});
    }

    async isAlive(){
	return this.connected;
    }

    async get(key){
	return promisify(this.client.GET).bind(this.client)(key);
    }

    async set(key, value, time){
	await promisify(this.client.SETEX).bind(this.client)(key, value, time);
    }

    async del(key){
	await promisify(this.client.DEL).bind(this.client)(key);
    }
}
const redisClient = new RedisClient();
export default redisClient;

import { createClient } from 'redis';

class RedisClient {
    constructor(){
	const client = createClient();
	client.on('error', err => console.log(err));
	client.connect();
    }

    isAlive(){
	if (client.isOpen){
	    return true;
	}
	return false;
    }

    async get(key){
	const value = await client.get(key);
	return value;
    }

    async set(key, value, time){
	await client.set(key, value, timeout=time);
    }

    async del(key){
	await client.del(key, function(err, response){
	    if (err) throw err;
	    console.log(response);
	});
    }
}
const redisClient = new RedisClient();
module.exports = redisClient;

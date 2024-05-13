import { createClient } from 'redis';

class RedisClient{
    constructor(){
	const client = createClient();
	client.on('error', err => console.log(err));
	await client.connect();
    }

    function isAlive(){
	if (client.isOpen){
	    return true;
	}
	return false;
    }

    async function get(key){
	const value = await client.get(key);
	return value;
    }

    async function set(key, value, time){
	await client.set(key, value, timeout=time);
    }

    async function del(key){
	await client.del(key, function(err, response){
	    if (err) throw err;
	    console.log(response);
	});
    }
}
const redisClient = RedisClient();
module.exports = redisClient;

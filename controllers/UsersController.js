import dbClient from '../utils/db';
import redisClient from '../utils/redis';

export default class UsersController {
    static getStatus(req, res) {
	res.status(200);
	res.send({"redis": redisClient.isAlive(), "db": dbClient.isAlive() });
    }

    static postNew() {
	return "Success"
    }
}

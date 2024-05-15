import { MongoClient } from 'mongodb';
class DBClient{
    constructor(){
	this.success = false;
	const DB_HOST = process.env.DB_HOST || 'localhost';
	const DB_PORT = process.env.DB_PORT || 27017;
	const DB_DATABASE = process.env.DB_DATABASE || 'files_manager';
	const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
	this.client = new MongoClient(url, { useUnifiedTopology: true });
	this.client.connect();
    }

    isAlive(){
	return this.client.isConnected();
    }

    async nbUsers(){
	try{
	    return await this.client.db().collection('users').countDocuments();
	}
	catch (err) {
	    return err;
	}
    }

    async nbFiles(){
	try{
	    return this.client.db().collection('files').countDocuments();
	}
	catch (err){
	    return err;
	}
    }

    async usersCollection(){
	try{
	    return this.client.db().collection('users');
	}
	catch (err){
	    return err;
	}
    }

    async filesCollection(){
	try{
	    return this.client.db().collection('files');
	}
	catch (err){
	    return err;
	}
    }
}

const dbClient = new DBClient();

export default dbClient;

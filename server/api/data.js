

import { MongoClient } from 'mongodb';

export default defineEventHandler(async (event) => {
    const uri = 'mongodb://localhost:27017/WebChat';
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('WebChat');
        const collection = database.collection('userslog');

        const data = await collection.find().toArray();
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch data'
        });
    } finally {
        await client.close();
    }
});
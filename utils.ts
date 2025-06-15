import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:npg_zi4rQev7NgZc@ep-lucky-waterfall-a6n5d2qo-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}

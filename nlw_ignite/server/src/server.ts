import fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './lib/routes';

const app = fastify();

app.register(cors)
app.register(appRoutes)

app.listen({
    host: '0.0.0.0',
    port: 3333,
}).then(()=>{
    console.log('Server running! 🚀🚀🚀');
})
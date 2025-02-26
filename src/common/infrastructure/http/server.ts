import { env } from "../env";
import { dataSource } from "../typeorm";
import { app } from "./app";

dataSource
    .initialize()
    .then(() => {
        app.listen(env.PORT, () => {
            console.log(`Server is Running on port ${env.PORT}`)
            console.log('API Docs disponíveis na rota GET /docs')
        })
    }).catch((error) => {
        console.error('Error starting server:', error)
    });


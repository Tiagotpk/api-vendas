import { env } from "../env";
import { app } from "./app";


app.listen(env.PORT, () => {
    console.log(`Server is Running on port ${env.PORT}`)
    console.log('API Docs disponíveis na rota GET /docs')
})
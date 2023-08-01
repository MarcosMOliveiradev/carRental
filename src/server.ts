import express from 'express';

const app = express();
app.get("/", (request, response) => {
    const hello = "Hello, Word! ignite"

    return response.json({message: hello})
})

app.listen(3333)
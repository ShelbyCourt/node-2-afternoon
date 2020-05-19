const express = require('express');
const app = express();
const mc = require('.controllers/messages_controller');
const SERVER_PORT = 3001;

app.use(express.json());

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(messagesBaseUrl, mc.update);
app.delete(messagesBaseUrl, mc.delete);


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
});


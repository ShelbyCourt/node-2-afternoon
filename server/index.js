const express = require("express");
const mc = require("./controllers/messages_controller");
const SERVER_PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
});




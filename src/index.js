import express, { json } from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(json());

let users = [];
let tweets = [];

server.post('/sign-up', (req, res) => {
    const user = req.body;

    if (user.avatar === "" || user.username === "") {
        res.sendStatus(400).send("Todos os campos são obrigatórios!");
        return;
    }
    users.push(user);
    tweets.length === 11 && tweets.slice(0, 1);
    res.sendStatus(201);
});

server.post('/tweets', (req, res) => {
    const receivedTweet = req.body;

    if (receivedTweet.tweet === "" || receivedTweet.username === "") {
        res.sendStatus(400).send("Todos os campos são obrigatórios!");
        return;
    }
    tweets.push(receivedTweet);
    res.sendStatus(201);
});

server.get('/tweets', (req, res) => {
    let tweetsSend = [];
    tweets.map((tweet) => {
        const findUser = users.find(user => tweet.username === user.username);
        tweetsSend.push({ ...tweet, avatar: findUser.avatar })
    });
    res.send([...tweetsSend].reverse());
});




server.listen(5000);
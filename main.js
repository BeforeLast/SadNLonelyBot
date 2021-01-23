const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

// Variables
var textjokes = ["Why do programmers always mix up Christmas and Halloween?\nBecause Dec 25 is Oct 31.",
                "The best thing about a Boolean is that even if you are wrong, you are only off by a bit.",
                "Why do Java programmers have to wear glasses?\nBecause they don’t C#.",
                "\"Debugging\" is like being the detective in a crime drama where you are also the murderer.",
                "I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k.\nIt was a trip down Memory Lane.",
                "A programmer had a problem. He thought to himself, \"I know, I\'ll solve it with threads!\"\nhas Now problems. two he"
                ]
var imagejokes = fs.readdirSync('./jokes');
var i;
var friendlist = [];

// Status Check
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Function
function isFriend(id){
    return friendlist.includes(id);
}

// Commands
client.on('message', msg => {
    if (msg.channel.type == 'dm'){
        if (msg.content.toLowerCase() === 'yes') {
            friendlist.push(msg.author.id);
            msg.author
                .send('YAAY!! :laughing:\nWe are now officially a friend!\nIt is a friend duty to help each other, right?\n')
                .then(console.log)
                .catch(console.error)
        } else if (msg.content.toLowerCase() === 'no') {
            msg.author
                .send(":scream_cat:")
                .then(console.log)
                .catch(console.error)
        } else if (msg.content.toLowerCase() === 'help') {
            if (isFriend(msg.author.id)) {
                msg.author
                    .send("What do you want?\n1. Give me something funny\n2. Ban someone in discord server\n3. About\n4. Bye")
                    .then(console.log)
                    .catch(console.error)
            } else {
                msg.author
                    .send("Leave me alone!")
                    .then(console.log)
                    .catch(console.error)
            }
        } else if (msg.content.toLowerCase() === 'give me something funny') {
            if (isFriend(msg.author.id)) {
                if ((Math.floor(Math.random()*1000) % 2) == 0){
                    i = Math.floor(Math.random()*1000) % imagejokes.length;
                    msg.author
                    .send({files:[`./jokes/${imagejokes[i]}`]})
                    .then(console.log)
                    .catch(console.error)
                } else {
                    i = Math.floor(Math.random()*1000) % textjokes.length;
                    msg.author
                    .send(textjokes[i])
                    .then(console.log)
                    .catch(console.error)
                }
            } else {
                msg.author
                    .send("Leave me alone!")
                    .then(console.log)
                    .catch(console.error)
            }
        } else if (msg.content.toLowerCase() === 'ban someone in discord server') {
            if (isFriend(msg.author.id)) {
                msg.author
                    .send("I'm sorry but I cannot do that.. :cry:")
                    .then(console.log)
                    .catch(console.error)
            } else {
                msg.author
                    .send("Leave me alone!")
                    .then(console.log)
                    .catch(console.error)
            }
        } else if (msg.content.toLowerCase() === 'about') {
            if (isFriend(msg.author.id)) {
                msg.author
                    .send("What? You want to know about my mean creator?\nSure, have a look : https://github.com/BeforeLast/SadNLonelyBot")
                    .then(console.log)
                    .catch(console.error)
            } else {
                msg.author
                    .send("Leave me alone!")
                    .then(console.log)
                    .catch(console.error)
            }
        } else if (msg.content.toLowerCase() === 'bye') {
            if (isFriend(msg.author.id)) {
                msg.author
                    .send("WHAT!? You're leaving me..? :cry:\nOkay then.. Goodbye.. :sob:")
                    .then(console.log)
                    .catch(console.error)
            } else {
                msg.author
                    .send("Leave me alone!")
                    .then(console.log)
                    .catch(console.error)
            }
            
        } else {
            msg.author
                .send('Hi! Thanks for talking to me. It\'s been a long time since someone talked to me.. :sob:\nI was made not long ago but I was abandoned after a few changes..\nMy creator is a really mean person.. :cry:\n Recently I have been updated to version 1.1! But no one congratulates me.. :cry:\n Do you want to be my friend?\n1. Yes\n2. No')
                .then(console.log)
                .catch(console.error);
        }
    } 
});

client.login('');
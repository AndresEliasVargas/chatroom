'use strict';

// chatroom data and the data from/to the documents and collections
//adding new chat documents
//setting up a real-time listener to get new chats
//updating the username
//updating the rooom

class Chatroom{
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
  }
};

const chatRoom = new Chatroom('Gaming', 'Andrés');
console.log(chatRoom);
'use strict';

// chatroom data and the data from/to the documents and collections
// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the rooom

class Chatroom{
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsub;
  }
  async addChat(message){
    // format a chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    // save the chat document
    const response = await this.chats.add(chat);
    return response;
  }
  // real-time listener
  getChats(callback){
    this.unsub = this.chats
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added'){
            // update UI
            callback(change.doc.data())
          }
        });
      });
  }
  updateName(username){
    this.username = username;
  }
  updateRoom(room){
    this.room = room;
    console.log('room updated');
    if(this.unsub){
      this.unsub();
    }
  }
};

const chatRoom = new Chatroom('general', 'Andrés');

chatRoom.getChats((data) => {
  console.log(data);
});

setTimeout(() => {
  chatRoom.updateRoom('gaming');
  chatRoom.updateName('Yoshi');

  chatRoom.getChats((data) => {
    console.log(data);
  });
  
  chatRoom.addChat('hello');
}, 3000);
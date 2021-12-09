'use strict';

// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

// add new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();

  const message = newChatForm.message.value.trim();
  chatRoom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

// class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('general', 'Andrés');

// get chats and render
chatRoom.getChats(data => { chatUI.render(data) });
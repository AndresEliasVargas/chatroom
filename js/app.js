'use strict';

// DOM queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');

// add new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault();

  const message = newChatForm.message.value.trim();
  chatRoom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(err => console.log(err));
});

//update username
newNameForm.addEventListener('submit', e => {
  e.preventDefault();

  // update username
  const newName = newNameForm.name.value.trim();
  chatRoom.updateName(newName);

  // reset form
  newNameForm.reset();

  // show then hide the update mssg
  updateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => updateMssg.innerText = '', 3000);
});

// check localstorage for a name
const username = localStorage.username ? localStorage.username : 'anonymous';

// class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('general', username);

// get chats and render
chatRoom.getChats(data => { chatUI.render(data) });
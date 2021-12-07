'use strict';

// DOM queries
const chatList = document.querySelector('.chat-list');

// class instances
const chatUI = new ChatUI(chatList);
const chatRoom = new Chatroom('general', 'Andrés');

// get chats and render
chatRoom.getChats(data => { chatUI.render(data) });
import io from 'socket.io-client'

const socket = io('http://localhost:7777');

socket.on('connect', ()=> {
  console.log('succes io');

})

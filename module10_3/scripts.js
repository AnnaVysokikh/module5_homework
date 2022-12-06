const wsUri = "wss://echo-ws-service.herokuapp.com";
const osmUri = "https://www.openstreetmap.org/";

function pageLoaded() {
  const infoOutput = document.querySelector(".info_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("input");
  const sendBtn = document.querySelector(".btn_send");
  const locationBtn = document.querySelector(".btn_location");
  
  let socket = new WebSocket(wsUri);
  
  socket.onopen = () => {
    infoOutput.innerText = "Соединение установлено";
  }
  
  socket.onmessage = (event) => {
    if (event.data.indexOf(osmUri) == -1)
      {
        writeToChat(`Server: ${event.data}`, true);
      }
  }
  
  socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }
  
  sendBtn.addEventListener("click", sendMessage);
  locationBtn.addEventListener("click", sendLocation);
  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }
  
  const error = () => {
    infoOutput.innerText = 'Невозможно получить ваше местоположение';
  }
  
  const success = (position) => {
    console.log('position', position);
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    socket.send(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
    writeToChat(`<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Ссылка на карту</a>`, false);
  }
  
  function sendLocation() {
  if (!navigator.geolocation) {
    infoOutput.innerText = 'Geolocation не поддерживается вашим браузером';
  } else {
    status.textContent = 'Определение местоположения…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
  }
  
  function writeToChat(message, isRecieved) {
    let messageHTML = `<div class="${isRecieved? "recieved" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);
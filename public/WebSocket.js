const temperatureData = [];
const humidityData = [];

// const socket = new WebSocket('wss://iot406-acg8akfbafehd3b3.southeastasia-01.azurewebsites.net');
const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('humidity').textContent = data.humidity;
};

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};



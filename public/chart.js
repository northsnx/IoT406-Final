const temperatureData = [];
const humidityData = [];

const socket = new WebSocket('wss://iot406.azurewebsites.net/');
//const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {

    const data = JSON.parse(event.data);
    document.getElementById('temperature').textContent = data.temperature;
    document.getElementById('humidity').textContent = data.humidity;
 
    temperatureData.push(data.temperature);
    humidityData.push(data.humidity);

    if (temperatureData.length > 10) {
        temperatureData.shift();
        humidityData.shift();
    }

    temperatureHumidityChart.update();
};

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

//graph
const ctx = document.getElementById('temperatureHumidityChart').getContext('2d');
const temperatureHumidityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: 10 }, (_, i) => i + 1),
        datasets: [
            {
                label: 'Temperature (°C)',
                data: temperatureData,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            },
            {
                label: 'Humidity (%)',
                data: humidityData,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#FFFFFF' 
                },
                grid: {
                    color: 'rgba(221, 221, 221, 0.3)' 
                }
            },
            x: {
                ticks: {
                    color: '#FFFFFF' 
                },
                grid: {
                    color: 'rgba(221, 221, 221, 0.3)' 
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#FFFFFF', 
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});
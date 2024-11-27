// ใส่ API Key ที่นี่
const apiKey = '76773275211747af92b45559242611';
// ระบุชื่อเมืองที่ต้องการข้อมูล
const city = 'Bangkok';
// สร้าง URL API
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

// ดึงข้อมูลจาก WeatherAPI
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // แสดงข้อมูลใน HTML
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
                <h3>${data.location.name}, ${data.location.country}</h3>
                <p>อุณหภูมิ: ${data.current.temp_c}°C    ความชื้น: ${data.current.humidity}% </p>
                <p>ข้อมูลสภาพอากาศ: ${data.current.condition.text}</p>
                <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}" />
            `;
    })

    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = '<p>Error loading weather data. Please try again later.</p>';
    });
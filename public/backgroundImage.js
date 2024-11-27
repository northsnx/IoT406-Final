const images = [
  './img/BG01.png',
  './img/BG02.png',
  './img/BG03.png',
  './img/BG04.png',
  './img/BG05.png'
];

let currentIndex = 0;

function changeBackgroundAutomatically() {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${randomImage})`;
  }, 15000); // เปลี่ยนทุก 3 วินาที
}

// เริ่มการเปลี่ยนภาพพื้นหลัง
changeBackgroundAutomatically();

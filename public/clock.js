function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000); // อัปเดตเวลาในทุกๆ วินาที
updateTime(); // เรียกครั้งแรกทันทีเพื่อไม่ต้องรอ 1 วินาทีแรก
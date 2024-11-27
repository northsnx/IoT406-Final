document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});

// ฟังก์ชัน toggle เพื่อเปิด/ปิดเมนู
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('show'); // ใช้ .show ในการสลับการแสดงผลเมนู
}
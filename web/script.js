// Danh sách các thông điệp yêu thương
const quotes = [
    "Tình yêu là ngọn lửa giữ ấm trái tim trong những ngày đông giá.",
    "Hãy để tình yêu dẫn lối, và bạn sẽ không bao giờ lạc đường.",
    "Mỗi khoảnh khắc bên nhau đều là món quà quý giá.",
    "Người bạn yêu thương là nguồn cảm hứng tuyệt vời nhất.",
    "Cuộc sống đẹp nhất khi có tình yêu chân thành."
];

// Hiển thị thông điệp ngẫu nhiên
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const romanticQuote = document.getElementById("romantic-quote");
    romanticQuote.textContent = quotes[randomIndex];
}

// Hiển thị ảnh lớn
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "flex";
}

// Đóng modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}


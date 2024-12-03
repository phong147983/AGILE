let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slideshow .slide');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // 3 giây mỗi slide
}

showSlides();

function login() {
    alert('Chức năng đăng nhập chưa được xây dựng!');
}

function register() {
    alert('Chức năng đăng ký chưa được xây dựng!');
}

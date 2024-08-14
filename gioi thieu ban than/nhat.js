document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng cuộn trang
    const sections = document.querySelectorAll('.container');
    const options = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hiệu ứng hover trên các liên kết điều hướng
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#ff7e5f';
            link.style.transition = 'color 0.3s';
        });
        link.addEventListener('mouseout', function() {
            link.style.color = 'white';
        });
    });

    // Hiệu ứng động cho hình ảnh profile
    const profileImage = document.querySelector('.profile img');
    profileImage.addEventListener('mouseover', () => {
        profileImage.style.transform = 'rotate(15deg) scale(1.1)';
        profileImage.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
        profileImage.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });
    
    profileImage.addEventListener('mouseout', () => {
        profileImage.style.transform = 'rotate(0deg) scale(1)';
        profileImage.style.boxShadow = 'none';
    });

    // Hiệu ứng fade-in cho tiêu đề và mô tả
    const headerContent = document.querySelector('.header-content');
    const profileContent = document.querySelector('.profile-content');

    setTimeout(() => {
        headerContent.classList.add('visible');
        profileContent.classList.add('visible');
    }, 500);

    // Thay đổi màu thanh điều hướng khi cuộn trang
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            nav.style.backgroundColor = '#1a2a6c';
            nav.style.transition = 'background-color 0.3s';
        } else {
            nav.classList.remove('scrolled');
            nav.style.backgroundColor = 'transparent';
        }
    });

    // Hiệu ứng lấp lánh cho biểu tượng mạng xã hội
    const socialIcons = document.querySelectorAll('.social-icons a img');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.style.filter = 'brightness(1.5)';
            icon.style.transition = 'filter 0.3s';
        });
        icon.addEventListener('mouseout', function() {
            icon.style.filter = 'brightness(1)';
        });
    });

    // Hiệu ứng phóng to trên liên kết điều hướng khi cuộn
    window.addEventListener('scroll', function() {
        navLinks.forEach(link => {
            if (link.getBoundingClientRect().top < window.innerHeight && link.getBoundingClientRect().bottom >= 0) {
                link.style.transform = 'scale(1.1)';
                link.style.transition = 'transform 0.3s';
            } else {
                link.style.transform = 'scale(1)';
            }
        });
    });
});

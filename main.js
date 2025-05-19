// Выпадающее меню
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.header-nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Параллакс эффект
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    if (parallax) {
        let scrollPosition = window.pageYOffset;
        parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    }
});

// Анимация при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        if (elementPosition < windowHeight - 100) {
            el.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Глобально доступные функции для модального окна
function openModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Модальное окно не найдено в DOM');
    }
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function openOrderForm() {
    openModal();
}

window.openOrderForm = openOrderForm;
window.closeModal = closeModal;

// Работа фильтрации и остального — после загрузки
document.addEventListener('DOMContentLoaded', () => {
    // Фильтрация для услуг
    const serviceButtons = document.querySelectorAll('.services-tabs .tab-btn');
    const serviceImages = document.querySelectorAll('#servicesGallery .gallery-img');

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            serviceButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            serviceImages.forEach(img => {
                img.style.display = (img.dataset.category === category) ? 'block' : 'none';
            });
        });
    });

    // Фильтрация для портфолио
    const filterButtons = document.querySelectorAll('.portfolio-filters .filter-btn');
    const portfolioImages = document.querySelectorAll('#portfolioGallery .gallery-img');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.dataset.filter;
            portfolioImages.forEach(img => {
                img.style.display = (filter === 'all' || img.dataset.category === filter) ? 'block' : 'none';
            });
        });
    });
});

window.openOrderForm = function () {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Модальное окно не найдено');
    }
};

window.closeModal = function () {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};



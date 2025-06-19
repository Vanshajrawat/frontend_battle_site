// Loader fade out
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => loader.style.display = 'none', 500);
  }, 1200);
});

// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

// OPTIONAL: Chart.js bar chart setup
/*
const ctx = document.getElementById('emissionsChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Concrete', 'Steel', 'Glass', 'Wood'],
    datasets: [{
      label: 'kgCO2e/m²',
      data: [150, 100, 75, 50],
      backgroundColor: '#007acc'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Embodied Carbon by Material'
      }
    }
  }
});
*/

new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-in-out',
  offset: 100,
  disable: 'mobile',
});

// script.js
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      loader.style.display = 'none';
      document.body.classList.remove('loading'); // ✅ Re-enable scrolling
    }, 500);
  }, 1200);
});

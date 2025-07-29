document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

const smoothScroll = () => {
  const links = document.querySelectorAll('a[href*="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
};

smoothScroll();
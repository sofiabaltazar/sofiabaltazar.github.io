    const servicesBtn = document.getElementById('services-btn');
    const aboutBtn = document.getElementById('about-btn');

    const servicesDropdown = document.getElementById('services-dropdown');
    const aboutDropdown = document.getElementById('about-dropdown');

    servicesBtn.addEventListener('click', () => {
      if (!servicesDropdown.classList.contains('hidden')) {
        servicesDropdown.classList.add('hidden');
      }
      aboutDropdown.classList.add('hidden');
    });

    aboutBtn.addEventListener('click', () => {
      if (!aboutDropdown.classList.contains('hidden')) {
        aboutDropdown.classList.add('hidden');
      }
      servicesDropdown.classList.add('hidden');
    });
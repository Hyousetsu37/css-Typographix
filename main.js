const icon = document.querySelector('.fa-regular');
const toggleName = document.querySelector('.toggle-name');
const lightTheme = () => {
  icon.classList.replace('fa-moon', 'fa-sun');
  toggleName.textContent = 'Light Mode';
};

const darkTheme = () => {
  icon.classList.replace('fa-sun', 'fa-moon');
  toggleName.textContent = 'Dark Mode';
};

const callLocal = () => {
  const localStorageThemeValue = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', localStorageThemeValue);
  console.log(localStorageThemeValue === 'dark');
  if (localStorageThemeValue === 'dark') {
    darkTheme();
  } else {
    lightTheme();
  }
};

callLocal();

const toggleBtn = document.querySelector('.toggle-mode');

const switchTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (!currentTheme || currentTheme === 'light') {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    darkTheme();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    console.log(currentTheme);
    lightTheme();
  }
};

toggleBtn.addEventListener('click', () => {
  switchTheme();
});

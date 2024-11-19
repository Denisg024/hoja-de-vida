const skillsButton = document.getElementById('skills-button');
const skillsSection = document.getElementById('skills');

skillsButton.addEventListener('click', () => {
    skillsSection.classList.toggle('show');
});
// Highlight "Ctrl+F"-like search
document.querySelector('.search-container input').addEventListener('input', function () {
  const text = this.value.toLowerCase();
  document.querySelectorAll('main p').forEach(p => {
    const content = p.textContent;
    if (text && content.toLowerCase().includes(text)) {
      const startIndex = content.toLowerCase().indexOf(text);
      const endIndex = startIndex + text.length;
      p.innerHTML = content.substring(0, startIndex) + '<mark class="highlight">' + content.substring(startIndex, endIndex) + '</mark>' + content.substring(endIndex);
    } else {
      p.innerHTML = content;
    }
  });
});

// Navigation scroll + bold active section
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
	  const target = document.getElementById(this.dataset.target);
if (target) {
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

  });
});


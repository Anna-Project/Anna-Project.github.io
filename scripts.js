document.addEventListener("DOMContentLoaded", function() {
    const noBtn = document.getElementById('no-btn');
    noBtn.addEventListener('mouseover', function() {
        const offsetX = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const offsetY = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = offsetX + 'px';
        noBtn.style.top = offsetY + 'px';
    });
});

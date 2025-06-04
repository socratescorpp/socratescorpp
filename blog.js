function volver() {
    window.location.href = 'index.html';
}

const videos = document.querySelectorAll('.video-card');
let currentIndex = 0;

function flipVideo(index) {
    videos[index].classList.toggle('flipped');
}

videos.forEach((video, i) => {
    video.addEventListener('click', () => {
        video.classList.toggle('flipped');
    });
});

setInterval(() => {
    videos[currentIndex].classList.remove('flipped');

    currentIndex = (currentIndex + 1) % videos.length;

    videos[currentIndex].classList.add('flipped');
}, 5000);

document.querySelectorAll('.posting').forEach(posting => {
    posting.addEventListener('mousedown', () => {
        posting.style.cursor = 'grabbing';
    });
    posting.addEventListener('mouseup', () => {
        posting.style.cursor = 'grab';
    });
    posting.addEventListener('mouseleave', () => {
        posting.style.cursor = 'grab';
    });
});

document.querySelectorAll('.carousel').forEach(function(carousel){
  var track = carousel.querySelector('.carousel-track');
  var prev = carousel.querySelector('.prev');
  var next = carousel.querySelector('.next');

  prev.addEventListener('click', function(){
    track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
  });
  next.addEventListener('click', function(){
    track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
  });
});

var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.lightbox-trigger').forEach(function(img){
  img.addEventListener('click', function(){
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
  });
});

function closeLightbox(){
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

lightbox.addEventListener('click', closeLightbox);
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') closeLightbox();
});

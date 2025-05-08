const cat = {
  serious: "serious",
  slightSmile: "slight-smile",
  smile: "smile"
}




const imageData = [
  { url: "https://images.pixieset.com/71141629/fdab3e791ba76f775f825bbbd8abc85b-medium.jpg", category: cat.serious },
  { url: "https://images.pixieset.com/71141629/d3913409dcf321116e555ad44e80b8d7-medium.jpg", category: cat.slightSmile },
  { url: "https://images.pixieset.com/71141629/4ee0ce03ba11ddac4560955cab4393cd-medium.jpg", category: cat.smile },
  { url: "https://images.pixieset.com/71141629/cd8834612c027cdd3daa6801361068a8-medium.jpg", category: cat.serious },
  { url: "https://images.pixieset.com/71141629/2e3c5d665564e4d886070e33b51a67e1-medium.jpg", category: cat.smile },
  { url: "https://images.pixieset.com/71141629/ef179ed4b0c3f920296846ca046e543d-medium.jpg", category: cat.slightSmile },
  { url: "https://images.pixieset.com/71141629/71d204e1ebc9e4f223d5e24bf8afcbdb-medium.jpg", category: cat.serious },
  { url: "https://images.pixieset.com/71141629/675503256f26d0b62bd8936006ef4b3c-medium.jpg", category: cat.slightSmile },
  { url: "https://images.pixieset.com/71141629/f992e455ca6e28ffb4e7ba6e8c75d762-medium.jpg", category: cat.slightSmile },
  { url: "https://images.pixieset.com/71141629/76185669bcf244cce3a1961b320a2d48-medium.jpg", category: cat.slightSmile},
  { url: "https://images.pixieset.com/71141629/5cb4df34537efd49f2c96a69ce8c99fb-medium.jpg", category: cat.serious },
  { url: "https://images.pixieset.com/71141629/5c76ef4df4edd3fbf0712765e61f6071-medium.jpg", category: cat.smile },
];

imageData.forEach((img, i) => {
  img.number = i + 1;
});



function renderCarousel(images, carouselId) {
  const carousel = document.getElementById(carouselId);

  images.forEach(img => {
    const wrapper = document.createElement('div');

    const a = document.createElement('a');
    a.href = img.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    const image = document.createElement('img');
    image.src = img.url;
    image.alt = `Image ${img.number}`;
    image.style.width = '100%';

    const label = document.createElement('p');
    label.textContent = `Image ${img.number}`;
    label.style.textAlign = 'center';
    label.style.marginTop = '0.5rem';
    label.style.fontWeight = 'bold';

    a.appendChild(image);
    wrapper.appendChild(a);
    wrapper.appendChild(label);
    carousel.appendChild(wrapper);
  });

  $(`#${carouselId}`).owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  });
}


$(document).ready(function () {
  // All images
  renderCarousel(imageData, 'carousel-all');

  // Filtered categories
  renderCarousel(imageData.filter(img => img.category === 'serious'), 'carousel-serious');
  renderCarousel(imageData.filter(img => img.category === 'slight-smile'), 'carousel-slight-smile');
  renderCarousel(imageData.filter(img => img.category === 'smile'), 'carousel-smile');

  // Optional arrow key navigation on the first carousel
  $(document).on('keydown', function (e) {
    const $carousel = $('#carousel-all');
    if (e.key === "ArrowLeft") $carousel.trigger('prev.owl.carousel');
    if (e.key === "ArrowRight") $carousel.trigger('next.owl.carousel');
  });
});

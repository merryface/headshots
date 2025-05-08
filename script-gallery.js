const cat = {
  serious: "serious",
  slightSmile: "slight-smile",
  smile: "smile"
}

const imageData = [
  { url: "https://images.pixieset.com/71141629/fdab3e791ba76f775f825bbbd8abc85b-medium.jpg", category: cat.serious },
  { url: "https://images.pixieset.com/71141629/d3913409dcf321116e555ad44e80b8d7-medium.jpg", category: cat.slightSmile },
  { url: "https://images.pixieset.com/71141629/4ee0ce03ba11ddac4560955cab4393cd-medium.jpg", category: cat.smile },
  { url: "https://images.pixieset.com/71141629/2e3c5d665564e4d886070e33b51a67e1-medium.jpg", category: cat.smile },
  { url: "https://images.pixieset.com/71141629/ef179ed4b0c3f920296846ca046e543d-medium.jpg", category: cat.slightSmile },
  { url: "https://images.pixieset.com/71141629/71d204e1ebc9e4f223d5e24bf8afcbdb-medium.jpg", category: cat.serious },
  { url: "https://images.pixieset.com/71141629/f992e455ca6e28ffb4e7ba6e8c75d762-medium.jpg", category: cat.slightSmile },
  { url: "https://images.pixieset.com/71141629/76185669bcf244cce3a1961b320a2d48-medium.jpg", category: cat.slightSmile},
  { url: "https://images.pixieset.com/71141629/5cb4df34537efd49f2c96a69ce8c99fb-medium.jpg", category: cat.serious },
  { url: "https://images.pixieset.com/71141629/5c76ef4df4edd3fbf0712765e61f6071-medium.jpg", category: cat.smile },
];

const imageList = document.querySelector('.images');

imageData.forEach(image => {
  const li = document.createElement('li');
  li.className = 'image';

  const img = document.createElement('img');
  img.src = image.url;
  img.alt = 'Image';

  li.appendChild(img);
  imageList.appendChild(li);
});
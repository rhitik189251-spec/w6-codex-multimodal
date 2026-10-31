const imageInput = document.querySelector("#image-input");
const imagePreview = document.querySelector("#image-preview");
let previewUrl;

imageInput.addEventListener("change", () => {
  const image = imageInput.files[0];
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
    previewUrl = undefined;
  }

  if (!image) {
    imagePreview.removeAttribute("src");
    imagePreview.hidden = true;
    return;
  }

  previewUrl = URL.createObjectURL(image);
  imagePreview.src = previewUrl;
  imagePreview.hidden = false;
});

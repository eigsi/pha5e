// PRELOAD IMAGES TO PREVENT GLITCH ANIMATIONS
export function preloadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = reject;
    });
  }
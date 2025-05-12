const getAssets = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href;
}

const getImageUrlFront = (imageName) => {
  return getAssets(`front/images/${imageName}`);
}

const getImageUrlGlobal = (imageName) => {
  return getAssets(`global/images/${imageName}`);
}

const getIconGlobal = (imageName) => {
  return getAssets(`global/icons/${imageName}`);
}

export { getImageUrlFront, getIconGlobal, getAssets, getImageUrlGlobal }
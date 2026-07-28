export function getImageSrc(image: any): string {
  if (!image) return '';
  if (typeof image === 'string') return image;
  if (typeof image === 'object' && image.src) return image.src;
  return String(image);
}

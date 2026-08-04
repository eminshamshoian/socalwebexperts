const CLOUDINARY_HOST = 'res.cloudinary.com';
const LOCAL_WIDTHS = [320, 480, 640, 960, 1400] as const;

const imageDimensions: Record<string, { width: number; height: number }> = {
  lawyer: { width: 640, height: 1571 },
  tag: { width: 640, height: 1175 },
  therapy: { width: 640, height: 1366 },
  'ev-design': { width: 1688, height: 8230 },
  'sams-bakery': { width: 2880, height: 11896 },
  surgery: { width: 640, height: 3307 },
};

function localImageKey(src: string): string | undefined {
  if (src.includes('ev-design')) return 'ev-design';
  if (src.includes('sams-bakery')) return 'sams-bakery';
  return undefined;
}

function cloudinaryImageKey(src: string): string | undefined {
  if (src.includes('lawyer-fullscreen')) return 'lawyer';
  if (src.includes('tag-fullscreen')) return 'tag';
  if (src.includes('therapy-fullscreen')) return 'therapy';
  if (src.includes('surgery-center')) return 'surgery';
  return undefined;
}

export function portfolioImageUrl(src: string, width: number): string {
  if (src.includes(CLOUDINARY_HOST)) {
    return src.replace(
      '/upload/',
      `/upload/f_auto,q_auto:eco,w_${width},c_limit/`,
    );
  }

  const key = localImageKey(src);
  if (!key) return src;

  const closestWidth = LOCAL_WIDTHS.reduce((closest, candidate) =>
    Math.abs(candidate - width) < Math.abs(closest - width) ? candidate : closest,
  );
  return `/portfolio/${key}-${closestWidth}.webp`;
}

export function portfolioImageSrcSet(
  src: string,
  widths: readonly number[] = LOCAL_WIDTHS,
): string {
  return widths
    .map((width) => `${portfolioImageUrl(src, width)} ${width}w`)
    .join(', ');
}

export function portfolioImageDimensions(src: string): { width: number; height: number } {
  const key = localImageKey(src) ?? cloudinaryImageKey(src);
  return (key && imageDimensions[key]) || { width: 1400, height: 3000 };
}

export const blockDocument = (): void => {
  document.documentElement.style.overflow = 'hidden';
};

export const unblockDocument = (): void => {
  document.documentElement.style.overflow = '';
};

export const changeIOSInfoBarColor = (toColor: string): void => {
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (!themeMeta) return;

  themeMeta.setAttribute('content', toColor);
};

export function blockDocument(): void {
  document.documentElement.style.overflow = 'hidden';
}

export function unblockDocument(): void {
  document.documentElement.style.overflow = '';
}

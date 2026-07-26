export function debounce(
  callback: (...args: any) => void,
  delayInMilliseconds: number,
) {
  let timer: number;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delayInMilliseconds);
  };
}

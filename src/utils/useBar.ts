export const useBar = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  elmRef: React.MutableRefObject<HTMLDivElement | null>,
  callback: React.Dispatch<React.SetStateAction<number>>
) => {
  if (elmRef.current) {
    const right = elmRef.current.getBoundingClientRect().right;
    const left = elmRef.current.getBoundingClientRect().left;
    const pos = event.screenX;

    const scale = right - left;
    const input = pos - left;
    const percent = Math.round((input * 100) / scale);

    callback(percent);
  }
};

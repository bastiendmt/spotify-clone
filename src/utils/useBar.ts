const useBar = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  elmRef: React.MutableRefObject<HTMLDivElement | null>,
  callback: React.Dispatch<React.SetStateAction<number>>,
): void => {
  if (elmRef.current != null) {
    const { right } = elmRef.current.getBoundingClientRect();
    const { left } = elmRef.current.getBoundingClientRect();
    const pos = event.screenX;

    const scale = right - left;
    const input = pos - left;
    const percent = Math.round((input * 100) / scale);

    callback(percent);
  }
};

export default useBar;

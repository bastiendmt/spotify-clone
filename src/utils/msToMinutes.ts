const msToMinutesAndSeconds = (ms: number): string => {
  const seconds = Number((ms % 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  const hoursText = hours !== 0 ? `${hours}:` : '';
  return `${hoursText}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default msToMinutesAndSeconds;

const millisToMinutesAndSeconds = (millis: number): string => {
  const seconds = Number((millis % 1000) % 60);
  const minutes = Math.floor((millis / (1000 * 60)) % 60);
  const hours = Math.floor((millis / (1000 * 60 * 60)) % 24);

  const hoursText = hours !== 0 ? `${hours}:` : '';
  return `${hoursText}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default millisToMinutesAndSeconds;

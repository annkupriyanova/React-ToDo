const addZeroIfNec = time => `${time < 10 ? 0 : ""}${time}`;

const convertTimeFunction = seconds => {
  const hours = Math.floor(seconds / 3600);
  const secondsNoHours = seconds - hours * 3600;
  const mins = Math.floor(secondsNoHours / 60);
  const secs = seconds - hours * 3600 - mins * 60;
  return `${addZeroIfNec(hours)}:${addZeroIfNec(mins)}:${addZeroIfNec(secs)}`;
};

export default convertTimeFunction
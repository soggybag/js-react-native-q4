export const formatTime = (time) => {
  const s = time % 60;
  const m = Math.floor(time / 60) % 60;
  const ss = s < 10 ? `0${s}` : `${s}`;
  const mm = m < 10 ? `0${m}` : `${m}`;
  return `${mm}:${ss}`;
}

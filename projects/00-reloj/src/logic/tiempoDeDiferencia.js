export default function tiempoDeDiferencia(limitDate) {
  const now = new Date().getTime();
  const countDownDate = new Date(limitDate).getTime();

  let limitMs = countDownDate - now;
  let days = Math.floor(limitMs / (1000 * 60 * 60 * 24));
  let hours = formatTime(
    Math.floor((limitMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = formatTime(
    Math.floor((limitMs % (1000 * 60 * 60)) / (1000 * 60))
  );
  let seconds = formatTime(Math.floor((limitMs % (1000 * 60)) / 1000));

  if (days === 0 && hours === '00' && minutes === '00' && seconds === '00') {
    return false;
  }

  return {days, hours, minutes, seconds};
}

const formatTime = (time) => {
  // time > 10 ? time : `0${time}`
  return `0${time}`.slice(-2);
};

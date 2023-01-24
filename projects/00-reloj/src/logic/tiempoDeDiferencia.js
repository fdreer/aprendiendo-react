export default function tiempoDeDiferencia(limitDate) {
  const now = new Date().getTime();
  const countDownDate = new Date(limitDate).getTime();

  if (countDownDate <= now) return false;

  let limitMs = countDownDate - now;
  let days = Math.floor(limitMs / (1000 * 60 * 60 * 24));
  let hours = (
    '0' + Math.floor((limitMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).slice(-2);
  let minutes = (
    '0' + Math.floor((limitMs % (1000 * 60 * 60)) / (1000 * 60))
  ).slice(-2);
  let seconds = ('0' + Math.floor((limitMs % (1000 * 60)) / 1000)).slice(-2);

  return {days, hours, minutes, seconds};
}

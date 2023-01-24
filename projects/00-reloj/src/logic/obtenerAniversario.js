export function obtenerAniversario(fecha) {
  const currenteDate = new Date();
  const currenteDateMs = currenteDate.getTime();
  const currenteYear = currenteDate.getFullYear();

  let nextAnniversary = new Date(`${fecha}, ${currenteYear}`);
  let nextAnniversaryMs = nextAnniversary.getTime();

  if (currenteDateMs > nextAnniversaryMs) {
    nextAnniversary = new Date(`${fecha}, ${currenteYear + 1}`);
    return nextAnniversary;
  }
  return nextAnniversary;
}

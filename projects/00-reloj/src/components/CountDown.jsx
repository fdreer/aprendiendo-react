import {useState, useEffect} from 'react';
import tiempoDeDiferencia from '../logic/tiempoDeDiferencia';
import {obtenerAniversario} from '../logic/obtenerAniversario';
import TimeToCountDown from './TimeToCountDown';
import fireworks from '../logic/fireworks';
import macaFranco from '../assets/maca-franco.jpeg';

export default function CountDown() {
  const [countDown, setCountDown] = useState(null);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    if (!isFinish) {
      setTimeout(() => {
        const aniversario = obtenerAniversario('Jan 26');

        // Time --> Diferencia de tiempo entre limitDate y now
        const time = tiempoDeDiferencia(aniversario);

        if (!time) {
          setCountDown({days: '0', hours: '00', minutes: '00', seconds: '00'});
          setIsFinish(true);
        } else {
          setCountDown(time);
        }
      }, 1000);
    } else {
      fireworks();
    }
  }, [countDown]);

  return (
    <section className="card">
      <img className="avatar" src={macaFranco} alt="Foto de Maca y Franco" />
      <h2>🤍 26 de Enero 🤍</h2>
      <TimeToCountDown countDown={countDown} isFinish={isFinish} />
    </section>
  );
}

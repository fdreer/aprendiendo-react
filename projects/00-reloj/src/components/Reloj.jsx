import {useEffect} from 'react';

export default function Reloj({time, setTime}) {
  useEffect(() => {
    let temporizador = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      // console.log('Reloj');
    }, 1000);
  }, []);

  return <h2>{time}</h2>;
}

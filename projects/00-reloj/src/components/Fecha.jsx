import {useState, useEffect} from 'react';

export default function Fecha({time}) {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  // useEffect(() => {
  //   if (time === '23:59:59') {
  //     setTimeout(() => {
  //       setDate(new Date().toLocaleDateString());
  //       console.log('Se cambia la fecha');
  //     }, 1000);
  //   }
  // }, [time]);

  if (time === '23:59:59') {
    setTimeout(() => {
      setDate(new Date().toLocaleDateString());
      console.log('Se cambia la fecha');
    }, 1000);
  }

  return <h2>{date}</h2>;
}

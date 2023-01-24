export default function TimeToCountDown({countDown, isFinish}) {
  // const {days, hours, minutes, seconds} = countDown;
  //   console.log(days, hours, minutes, seconds);

  return (
    <>
      <article className="count-down">
        <h2>
          {countDown === null
            ? 'Calculando...'
            : `${countDown.days}:${countDown.hours}:${countDown.minutes}:${countDown.seconds}`}
        </h2>
      </article>
      {isFinish && (
        <>
          <article>
            <h2>¡FELICIDADES!</h2>
          </article>
        </>
      )}
    </>
  );
}

import React, { useEffect, useState } from 'react';
import styles from './DisplayWeeklySchedule.module.css';

const DisplayWeeklySchedule = () => {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch('/api/weeklyschedule');
        const data = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error('Errore durante il caricamento del programma settimanale:', error);
      }
    };

    fetchSchedule();
  }, []);

  if (!schedule) {
    return <p className={styles.loading}>Caricamento programului săptămânal...</p>;
  }

  return (
    <div className={styles.container}>
      <h2>Programul Săptămânii: {schedule.interval}</h2>
      {Object.entries(schedule)
        .filter(([key, value]) => key !== 'interval' && value.events?.length > 0) // Esclude "interval" e verifica eventi
        .map(([day, { date, celebration, events }]) => (
          <div key={day} className={styles.day}>
            <h3>
              {day.charAt(0).toUpperCase() + day.slice(1)} - {date}
              {celebration && ` (${celebration})`}
            </h3>
            {events.map((event, index) => (
              <p key={index}>{event}</p>
            ))}
          </div>
        ))}
    </div>
  );
};

export default DisplayWeeklySchedule;

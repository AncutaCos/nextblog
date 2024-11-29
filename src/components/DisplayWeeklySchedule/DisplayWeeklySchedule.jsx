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
      {['luni', 'marti', 'miercuri', 'joi', 'vineri', 'sambata', 'duminica']
        .filter((day) => {
          const events = schedule[day];
          return Array.isArray(events) ? events.length > 0 : events?.trim(); // Controlla eventi validi
        })
        .map((day) => {
          const events = schedule[day];
          const eventList = Array.isArray(events) ? events : [events]; // Gestisce valori singoli
          return (
            <div key={day} className={styles.day}>
              <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
              {eventList.map((event, index) => (
                <p key={index}>{event}</p>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default DisplayWeeklySchedule;

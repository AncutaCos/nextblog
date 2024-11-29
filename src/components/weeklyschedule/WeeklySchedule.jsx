"use client"
import React, { useState } from 'react';
import styles from './WeeklySchedule.module.css';

const WeeklySchedule = () => {
  const [weekProgram, setWeekProgram] = useState({
    interval: '',
    luni: '',
    marti: '',
    miercuri: '',
    joi: '',
    vineri: '',
    sambata: '',
    duminica: '',
  });

  const handleInputChange = (e) => {
    setWeekProgram({
      ...weekProgram,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/weeklyschedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(weekProgram),
      });

      if (response.ok) {
        alert('Programma settimanale salvato con successo!');
      } else {
        alert('Errore durante il salvataggio.');
      }
    } catch (error) {
      console.error('Errore:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.scheduleContainer}>
      <h1>Adaugă Programul Săptămânal</h1>
      <div className={styles.intervalInput}>
        <label htmlFor="interval">Intervalul săptămânii</label>
        <input
          type="text"
          name="interval"
          value={weekProgram.interval}
          onChange={handleInputChange}
          placeholder="Exemplu: 25 Noiembrie - 1 Decembrie"
        />
      </div>
      {['luni', 'marti', 'miercuri', 'joi', 'vineri', 'sambata', 'duminica'].map((day) => (
        <div key={day} className={styles.dayInput}>
          <label htmlFor={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
          <textarea
            name={day}
            value={weekProgram[day]}
            onChange={handleInputChange}
            placeholder={`Programul pentru ${day.charAt(0).toUpperCase() + day.slice(1)}`}
            rows={4}
          />
        </div>
      ))}
      <button type="submit" className={styles.submitButton}>Adaugă Program</button>
    </form>
  );
};

export default WeeklySchedule;

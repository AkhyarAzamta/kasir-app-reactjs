import React, { useState, useEffect } from 'react';

function Time() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const date = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const clock = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };

  return (
    <div className='text-sm text-slate-600'>
      <p>Tanggal: {currentDateTime.toLocaleDateString('id-ID', date)}</p>
      <p> Jam: {currentDateTime.toLocaleTimeString('id-ID', clock)}</p>

    </div>
  );
}

export default Time;

import React, { useState } from 'react';
import { IService } from '../types/IService';

export const BookingContext = React.createContext<any>(null);

export const BookingProvider: React.FC = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [services, setServices] = useState<IService[]>([]);
  const [totalTime, setTotalTime] = useState<number>(0);
  const [message, setMessage] = useState('');

  return (
    <BookingContext.Provider value={{
      date,
      setDate,
      step,
      setStep,
      services,
      setServices,
      totalTime,
      setTotalTime,
      time,
      setTime,
      message,
      setMessage,
    }}>
      { children }
    </BookingContext.Provider>
  );
}
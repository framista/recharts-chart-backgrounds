import { format } from 'date-fns';

export const formatTimestamp = (timestampMs: number) =>
  format(new Date(timestampMs), 'dd.MM HH:mm');

import React from 'react';

export default function GetHoursAndMinutes(isoTimeString: string) {
  const timeString = isoTimeString && isoTimeString.split('T')[1];
  let hours = parseInt(timeString.substring(0, 2), 10);
  const minutes = timeString.substring(3, 5);
  let ampm = 'am';

  if (hours === 12) {
    ampm = 'pm';
  } else if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    ampm = 'pm';
  }

  return <span>{`${hours}:${minutes} ${ampm}`}</span>;
}

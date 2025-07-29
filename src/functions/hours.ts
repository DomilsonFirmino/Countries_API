export function hoursToMinutes(hour: number): {
  hours: number;
  minutes: number;
} {
  return { hours: Math.floor(hour / 60), minutes: hour % 60 };
}

export function DateToMinutes(date: Date, extra = 0): number {
  return date.getHours() * 60 + date.getMinutes() + extra;
}

const addZeroCharacter = (n: number) => {
  return n < 10 ? `0${n}` : n;
};

export default function formatDate(date: string): string {
  const isoString = new Date(date);

  const day = addZeroCharacter(isoString.getDay());
  const month = addZeroCharacter(isoString.getMonth());
  const year = isoString.getFullYear();
  const hour = addZeroCharacter(isoString.getHours());
  const minute = addZeroCharacter(isoString.getMinutes());

  return `${day}/${month}/${year}  ${hour}:${minute}`;
}

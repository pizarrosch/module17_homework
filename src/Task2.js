// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.

export default function getPercents(percent, number) {
 if (percent > 100) {
  return 'Please enter a number less or equal 100';
 } else if (percent < 1) {
  return 'Please enter a number more or equal 1';
 }
 return number * percent / 100;
}

getPercents(30, 200);


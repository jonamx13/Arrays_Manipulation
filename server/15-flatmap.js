const users = [
    { userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
    { userId: 2, username: 'Mike', attributes: ['Lovely'] },
    { userId: 3, username: 'Nico', attributes: ['Nice', 'Cool'] },
];

const rta = users.map( user => user.attributes ).flat();
const rta2 = users.flatMap(user => user.attributes);

console.log('map-flat', rta);
console.log('flatmap', rta2);

//TODO
//*Class challenge
const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

 /* Is creating a new array that contains all the start dates from the appointments in
 both the primary and secondary calendars of the `calendars` object. */
  const rta3 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate)
  });
  console.log(rta3);
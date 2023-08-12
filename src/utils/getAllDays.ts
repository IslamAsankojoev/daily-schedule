import  { startOfWeek, addWeeks, eachDayOfInterval, format } from 'date-fns'
export const getAllDays = (contributions:IDay[]) => {


  const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });

  const allWeeks = [];
  
  for (let i = 0; i < 52; i++) {
    const startOfWeekForIteration = addWeeks(startOfCurrentWeek, -i);
    
    const weekDays = eachDayOfInterval({
      start: startOfWeekForIteration,
      end: addWeeks(startOfWeekForIteration, 1),
    }).slice(0, 7) // Получаем только первые 7 дней
    
    const formattedWeekDays = weekDays.map((day) => format(day, 'yyyy-MM-dd'));
  
    allWeeks.push(formattedWeekDays);
  }

  const result = allWeeks.map(week => {
    const weekWithContributions = week.map(day => {
      const contributionObject = contributions.find(item => item.date === day);
      
      if (contributionObject) {
        return contributionObject;
      } else {
        return {
          date: day,
          contributions: 0
        };
      }
    });
  
    return weekWithContributions;
  });

  return result
}
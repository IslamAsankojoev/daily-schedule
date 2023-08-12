export const ResponseObjectToArray = (data:any) => {
  const dataArray = [];

  for (const date in data) {
      dataArray.push({
          date: date,
          contributions: data[date]
      });
  }

  return dataArray;
}
import moment from "moment";

const getWeekData = () => {
  const currentDate = moment();
  const startOfWeek = currentDate.clone().startOf("week");
  const weekData = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = startOfWeek.clone().add(i, "days");
    const dayObject = {
      date: currentDate.date(),
      name: currentDate.format("ddd"), // 'ddd' gives the abbreviated day name,
      isSelected: currentDate.isSame(moment(), 'day'), // Check if it's today
    };
    weekData.push(dayObject);
  }
 return weekData
};

export {getWeekData}
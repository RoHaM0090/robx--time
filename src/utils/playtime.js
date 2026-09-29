export function calcPlaytime(totalDays,hoursPerDay,daysPerWeek){
 const perWeek=hoursPerDay*daysPerWeek;
 const hours=perWeek*(totalDays/7);
 const pct=Math.min(100,(hours/(totalDays*24))*100);
 return{hours,days:hours/24,weeks:hours/24/7,months:hours/24/30.4375,years:hours/24/365.25,perWeek,perYear:perWeek*52.18,pct};
}

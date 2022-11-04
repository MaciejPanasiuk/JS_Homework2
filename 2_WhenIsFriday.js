//counting days till friday
//we make an array with 7 items
//we make a function with a certain day as a parameter
//we check if its in the array and on what position
//we then subtract the position of friday with that day, if its sub zero then we make it II
//guess we will be done? consolelog it, itd

let WeekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
function FridayFinda(day){
    if (WeekDays.includes(day) && day == 'friday')
    {return 'hey, friday is today!'}
        else if (WeekDays.includes(day) && day !='friday')
{

    if (WeekDays.indexOf('friday')> WeekDays.indexOf(day)){
    return `We have ${WeekDays.indexOf('friday')-WeekDays.indexOf(day)} days till Friday`;}
    else if (WeekDays.indexOf('friday')< WeekDays.indexOf(day)){
      return `We have ${WeekDays.length-(WeekDays.indexOf(day)-WeekDays.indexOf('friday'))} days till Friday`;
    }}
    else
    {
        return `sorry, but I cant make sense of it, you put something different that a day of week. Maybe its in a different language than english? Maybe its in french? I wouldnt know for certain because im a complete lingual luddite. I urge you to next time set a day of the week in english so I can be put to work and tell you how long its till friday.Thats literary, not figuratively- LITERARY all I ever do.`
    }}
    console.log(FridayFinda('mondayz'));

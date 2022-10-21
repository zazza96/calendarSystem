import calendar from './calendar.json';

export default ()=>{
    //selectors
    const dateContainer = document.getElementById('date-selection'); //get date container
    const classesContainer = document.getElementById('classes-section'); //get classes container
    let i = 0;

    //loop through json object (first level)
    for (const obj of calendar) {
        //create date section
        let thisdate = obj.date;
        let thisday = obj.day;
        //insert each new date just before the closing tags of the container as this ensures dates are added in order
        dateContainer.insertAdjacentHTML('beforeend',`<div class="date-container" data-date="${thisdate}"><span class="day">${thisday}</span><span class="date">${thisdate}</span></div>`);
        //insert a group container where all classes will be added
        classesContainer.insertAdjacentHTML('beforeend',`<div class="thisdaysLesson lessondate-${thisdate}"></div>`);

        //loop through second level 
        for (const lesson of obj.lessons) {
            //adds classes
            document.querySelector('.lessondate-'+thisdate).insertAdjacentHTML('beforeend',`<div class="class_container flex" data-name="${lesson.name}" data-id="${lesson.id}"><div class="class-details flex-left"><h3>${lesson.name}</h3><div class="class-time"><span><i class="fa fa-light fa-clock"></i></span><span class="time">${lesson.time}</span></div><p class="location">${lesson.location}</p></div><div class="flex-right"><div class="booking_btn-container"><button class="booking_btn">BOOK</button></div><div class="spaces"><p>${lesson.spaces} SPACES LEFT</p></div></div></div>`);
        }
    }
    //first date on the list should be selected
    document.getElementsByClassName('date-container')[0].classList.add('selected');
    //the timetable that matches the date (first on the list), should be selected
    document.getElementsByClassName('thisdaysLesson')[0].classList.add('selected');
}
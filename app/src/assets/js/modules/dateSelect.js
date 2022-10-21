export default ()=>{
    const dateContainer =  document.getElementsByClassName('date-container');

    //loop through dateContainer
    for(let i =0; dateContainer.length > i; i++){
        //add click event to each date 
        dateContainer[i].addEventListener("click",e=>{
            //if the date selected class exists, remove it on click
            if(document.querySelector('.date-container.selected')){
                document.querySelector('.date-container.selected').classList.remove('selected'); //remove the class
            }
            

            let $target = e.target;
            //make sure its a div being targeted
            if ($target.tagName == 'DIV') {
                //add selected class to
                $target.classList.add('selected');
            } else {
                //if it's not a div, add selected class to the parent
                $target.parentElement.classList.add('selected');
            }
            //get the date attribute that contains the date number
            let classDate = document.querySelector('.date-container.selected').getAttribute('data-date');
            //remove selected from timetable
            document.querySelector('.thisdaysLesson.selected').classList.remove('selected');
            //add selected to the correct timetable to display
            document.querySelector('.lessondate-'+classDate).classList.add('selected');
        });
    }
}
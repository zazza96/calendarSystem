export default ()=>{
    const all_filters =  document.getElementsByClassName('filter');

    //loop thorugh all filters
    for(let i =0; all_filters.length > i; i++){
        all_filters[i].addEventListener("click",e=>{            
            let $target = e.target;
            if ($target.tagName == 'DIV') { //when the div is clicked
                //and the filter hasn't got an active class
                if(!$target.classList.contains('active')) {
                    //add active class to the filter
                    $target.classList.add('active');
                    //depending on what is clicked show the correct classes
                    if($target.classList.contains('pilates')) {
                        showLesson('Pilates');
                    } 
                    else if($target.classList.contains('yoga')){
                        showLesson('Yoga');
                    }
                    else if($target.classList.contains('boxercise')){
                        showLesson('Boxercise');
                    }
                } else { //if active class exists within the clicked filter
                    //remove active class
                    $target.classList.remove('active');
                    //hide classes with the removed filter
                    if($target.classList.contains('pilates')) {
                        hideLesson('Pilates');
                    } 
                    else if($target.classList.contains('yoga')){
                        hideLesson('Yoga');
                    }
                    else if($target.classList.contains('boxercise')){
                        hideLesson('Boxercise');
                    }
                }
            } else { //if the click is not on the div element
                //target the parent as the click happened on a child element
                //code is the same as above
                if(!$target.parentElement.classList.contains('active')) {
                    $target.parentElement.classList.add('active');
                    if($target.parentElement.classList.contains('pilates')) {
                        showLesson('Pilates');
                    } 
                    else if($target.parentElement.classList.contains('yoga')){
                        showLesson('Yoga');
                    }
                    else if($target.parentElement.classList.contains('boxercise')){
                        showLesson('Boxercise');
                    }
                } else {
                    $target.parentElement.classList.remove('active');
                    if($target.parentElement.classList.contains('pilates')) {
                        hideLesson('Pilates');
                    } 
                    else if($target.parentElement.classList.contains('yoga')){
                        hideLesson('Yoga');
                    }
                    else if($target.parentElement.classList.contains('boxercise')){
                        hideLesson('Boxercise');
                    }
                }
                
            }
        });
    }
    //toggle show and hide of all the filters
    document.getElementById('filter-btn').addEventListener('click',_=>{
        const filter = document.getElementById('filters');
        //if .filters doesn't contain .hide 
        if(!filter.classList.contains('hide')) {
            //hide it
            filter.classList.add('hide');
            document.getElementById('filter-btn').classList.add('hiding');
        } else {
            //otherwise show it on click
            filter.classList.remove('hide');
            document.getElementById('filter-btn').classList.remove('hiding');
        }
    });
}

function hideLesson(lessonName) {
    const classContainer = document.getElementsByClassName('class_container');
    //looop thrugh all classes
    for (let i = 0; i < classContainer.length; i++) {
        if(classContainer[i].getAttribute("data-name") == lessonName) {
            //hide classes that have been removed from the filter
            classContainer[i].classList.add('hide');
        }
    }
}

function showLesson(lessonName) {
    const classContainer = document.getElementsByClassName('class_container');
    //loop through all class
    for (let i = 0; i < classContainer.length; i++) {
        //show classes that have been added from the filter
        if(classContainer[i].getAttribute("data-name") == lessonName) {
            classContainer[i].classList.remove('hide');
        }
    }
}
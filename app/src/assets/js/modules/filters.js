export default ()=>{
    const all_filters =  document.getElementsByClassName('filter');

    for(let i =0; all_filters.length > i; i++){
        all_filters[i].addEventListener("click",e=>{            
            let $target = e.target;
            if ($target.tagName == 'DIV') {
                if(!$target.classList.contains('active')) {
                    $target.classList.add('active');
                    if($target.classList.contains('pilates')) {
                        showLesson('Pilates');
                    } 
                    else if($target.classList.contains('yoga')){
                        showLesson('Yoga');
                    }
                    else if($target.classList.contains('boxercise')){
                        showLesson('Boxercise');
                    }
                } else {
                    $target.classList.remove('active');
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
            } else {
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
    document.getElementById('filter-btn').addEventListener('click',_=>{
        const filter = document.getElementById('filters');
        if(!filter.classList.contains('hide')) {
            filter.classList.add('hide');
            document.getElementById('filter-btn').classList.add('hiding');
        } else {
            filter.classList.remove('hide');
            document.getElementById('filter-btn').classList.remove('hiding');
        }
    });
}

function hideLesson(lessonName) {
    const classContainer = document.getElementsByClassName('class_container');

    for (let i = 0; i < classContainer.length; i++) {
        if(classContainer[i].getAttribute("data-name") == lessonName) {
            classContainer[i].classList.add('hide');
        }
    }
}

function showLesson(lessonName) {
    const classContainer = document.getElementsByClassName('class_container');

    for (let i = 0; i < classContainer.length; i++) {
        if(classContainer[i].getAttribute("data-name") == lessonName) {
            classContainer[i].classList.remove('hide');
        }
    }
}
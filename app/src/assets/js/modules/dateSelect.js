export default ()=>{
    const dateContainer =  document.getElementsByClassName('date-container');

    for(let i =0; dateContainer.length > i; i++){
        dateContainer[i].addEventListener("click",e=>{
            if(document.querySelector('.date-container.selected')){
                document.querySelector('.date-container.selected').classList.remove('selected');
            }
            
            let $target = e.target;
            if ($target.tagName == 'DIV') {
                $target.classList.add('selected');
                classDate = $target.getAttribute('data-date');
            } else {
                $target.parentElement.classList.add('selected');
            }
            let classDate = document.querySelector('.date-container.selected').getAttribute('data-date');
            document.querySelector('.thisdaysLesson.selected').classList.remove('selected');
            document.querySelector('.lessondate-'+classDate).classList.add('selected');
        });
    }
}
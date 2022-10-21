export default ()=>{
    const btn =  document.getElementsByClassName('booking_btn');

    for(let i =0; btn.length > i; i++){
        btn[i].addEventListener("click",e=>{            
            let $target = e.target;
            if ($target.tagName == 'BUTTON') {
                if(!$target.classList.contains('booked')) {
                    $target.classList.add('booked');
                    $target.textContent = "BOOKED";
                    $target.parentElement.nextSibling.classList.add('hide');
                } else {
                    $target.classList.remove('booked');
                    $target.textContent = "BOOK";
                    $target.parentElement.nextSibling.classList.remove('hide');
                }
            } 
        });
    }
}
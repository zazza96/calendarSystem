export default ()=>{
    const btn =  document.getElementsByClassName('booking_btn');

    //Loop through all buttons on th page
    for(let i =0; btn.length > i; i++){
        //add a click event listener on each button
        btn[i].addEventListener("click",e=>{            
            let $target = e.target;

            //if the clicked element is a node type of button, then add book
            if ($target.tagName == 'BUTTON') {
                //if the button doesn't already have the booked class
                if(!$target.classList.contains('booked')) {
                    //add the booked class
                    $target.classList.add('booked');
                    //change the text to booked
                    $target.textContent = "BOOKED";
                    //hide the available spaces text below
                    $target.parentElement.nextSibling.classList.add('hide');
                } else {
                    //if button has class booked
                    $target.classList.remove('booked'); //remove the booked class
                    $target.textContent = "BOOK"; //change text to book
                    $target.parentElement.nextSibling.classList.remove('hide'); //show the available spaces section below
                }
            } 
        });
    }
}
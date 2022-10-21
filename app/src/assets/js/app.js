// Font Awesome
import '@fortawesome/fontawesome-free';

// Styles
import '../scss/main.scss';


// // Own modules
// import getBooks from './modules/getBooks';
// import clickBook from './modules/clickBook';

import createCalendar from './modules/createCalendar';
import dateSelect from './modules/dateSelect';
import booking_btn from './modules/booking_btn';
import filters from './modules/filters';

createCalendar();
dateSelect();
booking_btn();
filters();


// getBooks();
// clickBook();
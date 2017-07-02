import 'babel-polyfill';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../css/style.css';


const AppHeader = require('./header');
const AppFooter = require('./footer');

let header = new AppHeader();
header.init();

let footer = new AppFooter();
footer.init();


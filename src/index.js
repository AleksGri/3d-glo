'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import teamGallery from './modules/teamGallery';
import forms from './modules/forms';

//Timer
countTimer('15:20 5 october 2021');
//Menu
toggleMenu();
//PopUp
togglePopUp();
//Tabs
tabs();
//Slider
slider();
//Calculator
calc(100);
//Our team
teamGallery();
//forms
forms();
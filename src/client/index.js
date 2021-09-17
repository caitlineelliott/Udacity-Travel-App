import { appendItems, appendNewItems, appendExisitingItems, styleItems } from './js/appendItems';
import { createForm, discardSTVItems, saveSTVItems } from './js/createForm';
import { displayWeather, displayLongForecast } from './js/displayWeather';
import { generate } from './js/handleSubmit';
import { editItems, modifyEditedItems, saveEditedItem, updateTripDates, displayNewTrips, removeItems, toggleItems } from './js/modifyItems';
import { viewSavedTrips, displayTrip, displayData } from './js/savedTripsView';
import { getUnsavedTrip, getUserData, postData, deleteServerData } from './js/serverRequests';
import { viewNewTrip, getRandomNum } from './js/viewNewTrip';

import './styles/base.scss';
import './styles/header.scss';
import './styles/trip-form.scss';
import './styles/new-trip-view.scss';
import './styles/saved-trips-view.scss';
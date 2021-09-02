import { getGeonames, getWeatherBit, getHeaderPhoto } from './js/apiRequests';
import { generate } from './js/handleSubmit';
import { editItems, removeItems, toggleItems } from './js/modifyItems';
import { displayTrip, viewSavedTrips } from './js/savedTripsView';
import { getUserData, postData, deleteServerData } from './js/serverRequests';
import { viewNewTrip, getRandomNum, setWeatherDOMStructure } from './js/viewNewTrip';

import './styles/base.scss';
import './styles/header.scss';
import './styles/trip-form.scss';
import './styles/new-trip-view.scss';
import './styles/saved-trips-view.scss';
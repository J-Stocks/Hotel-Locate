// Importing the Hotel Class.
import {Hotel} from '/js/hotelSearch.js';

// Returns an array containing the master hotel data.
export function generateHotels(){
  let tempHotels = [];
  tempHotels.push(new Hotel("The Grand",5,0.5,true,false,190,"/images/thegrand.jpg"));
  tempHotels.push(new Hotel("The Plaza",4,1,true,true,70,"/images/theplaza.jpg"));
  tempHotels.push(new Hotel("The Lord Milburn",4,5,true,false,65,"/images/thelordmilburn.jpg"));
  tempHotels.push(new Hotel("The Grange",3,1,true,false,57,"/images/thegrange.jpg"));
  tempHotels.push(new Hotel("The Windmill",1,10,false,false,5,"/images/thewindmill.jpg"));
  tempHotels.push(new Hotel("The Excel",3,0.5,true,false,56,"/images/theexcel.jpg"));
  tempHotels.push(new Hotel("The Ritz",2,5,true,false,14,"/images/theritz.jpg"));
  tempHotels.push(new Hotel("The Victoria",4,0.5,true,false,80,"/images/thevictoria.jpg"));
  tempHotels.push(new Hotel("Phoenix House",4,1,true,false,72,"/images/phoenixhouse.jpg"));
  tempHotels.push(new Hotel("The Lodge",2,1,false,false,25,"/images/thelodge.jpg"));
  tempHotels.push(new Hotel("The Sanctum",5,2,true,true,180,"/images/thesanctum.jpg"));
  return tempHotels;
}

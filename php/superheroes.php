<?php

 header("Access-Control-Allow-Origin: *");


$superheroes = [
  [
      "id" => 1,
      "name" => "Steve Rogers",
      "alias" => "Captain America",
      "biography" => "Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
  ],
  [
      "id" => 2,
      "name" => "Tony Stark",
      "alias" => "Ironman",
      "biography" => "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man.",
  ],
  [
      "id" => 3,
      "name" => "Peter Parker",
      "alias" => "Spiderman",
      "biography" => "Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
  ],
  [
      "id" => 4,
      "name" => "Carol Danvers",
      "alias" => "Captain Marvel",
      "biography" => "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
  ],
  [
      "id" => 5,
      "name" => "Natasha Romanov",
      "alias" => "Black Widow",
      "biography" => "Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.",
  ],
  [
      "id" => 6,
      "name" => "Bruce Banner",
      "alias" => "Hulk",
      "biography" => "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
  ],
  [
      "id" => 7,
      "name" => "Clint Barton",
      "alias" => "Hawkeye",
      "biography" => "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
  ],
  [
      "id" => 8,
      "name" => "T'challa",
      "alias" => "Black Panther",
      "biography" => "T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.",
  ],
  [
      "id" => 9,
      "name" => "Thor Odinson",
      "alias" => "Thor",
      "biography" => "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
  ],
  [
      "id" => 10,
      "name" => "Wanda Maximoff",
      "alias" => "Scarlett Witch",
      "biography" => "Notably powerful, Wanda Maximoff has fought both against and with the Avengers, attempting to hone her abilities and do what she believes is right to help the world.",
  ],
];


#echo and print works the same (marginal difference)
#though sir might have initially had his variables returned in a html element.
#I thought doing it as clean as possible would be a much better route to go.
#So to be clear my endpoint(php file) does not return a html element but rather a string of information separated by a ';'
#that ';' is then parsed using JS and read using the necessary functions and files
echo trim(searchForAlias(filter_input(INPUT_GET,"alias",FILTER_SANITIZE_STRING),$superheroes));

#php way of checking if the alias or name given is in the array.
#if it does exist return the alias, name and biography
#if the input given is empty we send all the heroes(Though i checked for a empty string it would have been better to check if empty)
#if all of these fail, thus meaning a string was sent but it was neither an empty string or an actual hero(output no super hero found)
function searchForAlias($alias, $array) {

   foreach ($array as $key => $val) {
       if (($val['alias'] === $alias) || ($val['name'] === $alias) ) {
           return $array[$key]['alias'].';'.'AKA '.$array[$key]['name'].';'.$array[$key]['biography'];
       }
	   if($alias == ''){
		   return 'All'.defaultreturn($array);
	   }
   }
   return 'No Super Hero Found';
}

#this function just returns the alias of heroes from the default array
function defaultreturn($array) {
	$test='';
	foreach($array as $superhero => $value) {
		$test.= ';'.$value['alias'] ;
	}
	return $test;

}
?>



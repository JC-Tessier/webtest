const arrayData = [
  {
    id: 1,
    imagePath: "./img/moscow-mule.jpg",
    title: "Moscow Mule",
    recipe: "https://cookieandkate.com/best-moscow-mule-recipe/",
    strength: 2,
    rating: 2,
    ingredients: [
      { What: "Vodka", Qty: "2 oz" },
      { What: "Fresh Lemon Juice", Qty: "1/2 Lime" },
      { What: "Ginger Beer", Qty: "4 oz" },
      { What: "Lime Wedge", Qty: "Garnish" },
    ],
    in_test:
      "<tr><td>Vodka</td><td>2 oz</td></tr><tr><td>Fresh Lime Juice</td><td>1/2 lime</td></tr><tr><td>Ginger Beer</td><td>4 oz</td></tr><tr><td>Lime Wedge</td><td>Garnish</td></tr>",

    desc: "The <b>Moscow Mule</b> features a refreshing and zesty flavor profile, with the crisp bite of ginger beer, the tartness of lime, and the smooth warmth of vodka, all balanced by a hint of sweetness.",
  },
  {
    id: 2,
    imagePath: "./img/kamikaze.jpg",
    title: "Kamikaze",
    recipe: "https://www.thespruceeats.com/kamikaze-cocktail-recipe-759313",
    strength: 3,
    rating: 0,
    ingredients: [
      { What: "Vodka", Qty: "1 1/2 oz" },
      { What: "Triple Sec", Qty: "1 oz" },
      { What: "Lime Juice", Qty: "1 oz" },
      { What: "Lime Wedge", Qty: "Garnish" },
    ],
    in_test:
      "<td>Vodka</td><td>1 1/2 oz</td></tr><tr><td>Triple Sec</td><td>1 oz</td></tr><tr><td>Lime Juice</td><td>1 oz</td></tr><tr><td>Lime Wedge</td><td>Garnish</td>",
    desc: "The <b>Kamikaze</b> offers a bold, tangy flavor with the sharpness of lime juice, the smoothness of vodka, and a subtle sweetness from orange liqueur, creating a balanced and refreshing citrus-forward profile.",
  },
  {
    id: 3,
    imagePath: "./img/whiskey sour.jpg",
    title: "Whiskey Sour",
    recipe: "https://www.thespruceeats.com/whiskey-sour-recipe-761273",
    strength: 3,
    rating: 0,
    ingredients: [
      { What: "Whiskey", Qty: "1 1/2 oz" },
      { What: "Lemon Juice", Qty: "1/2 Lime" },
      { What: "Simple Syrup", Qty: "1/2 oz" },
      { What: "Sour Cherry", Qty: "Garnish" },
    ],
    in_test:
      "<tr><td>Whiskey</td><td>1 1/2 oz</td></tr><tr><td>Lemon Juice</td><td>1/2 oz</td></tr><tr><td>Simple Syrup</td><td>1/2 oz</td></tr><tr><td>Sour Cherry</td><td>1</td></tr>",
    desc: "The <b>Whiskey Sour</b> combines the smooth warmth of whiskey with the tartness of fresh lemon juice, balanced by a touch of sweetness from simple syrup, creating a refreshing and well-rounded cocktail. ",
  },
  {
    id: 4,
    imagePath: "./img/honey lemon whiskey sour.jpg",
    title: "Honey Lemon Whiskey Sour",
    recipe:
      "https://chilledmagazine.com/jack-daniels-tennessee-honey-cocktails-for-national-whiskey-sour-day/",
    strength: 2,
    rating: 0,
    ingredients: [
      { What: "Honey Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Honey Whiskey</td><td>2 oz</td></tr><tr><td>Lemon Juice</td><td>2 oz</td></tr><tr><td>Water</td><td>1 oz</td></tr><tr><td>Orange Peels</td><td>Garnish</td></tr><tr><td>Sour Cherries</td><td>2</td></tr>",
    desc: "The <b>Honey Lemon Whiskey Sour</b> blends the smooth warmth of whiskey with the bright tartness of fresh lemon juice, enhanced by the natural sweetness of honey, creating a balanced and soothing citrusy-sweet drink.",
  },
  {
    id: 5,
    imagePath: "./img/old-fashioned.jpg",
    title: "Old Fashioned",
    recipe: "https://www.allrecipes.com/recipe/162397/classic-old-fashioned/",
    strength: 3,
    rating: 0,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Whiskey</td><td>1 1/2 oz</td></tr><tr><td>Water</td><td>1 tsp</td></tr><tr><td>Angostura bitters</td><td>2 Drops</td></tr><tr><td>Orange Wedge</td><td>1</td></tr><tr><td>Sour Cherry</td><td>1</td></tr><tr><td>Simple Syrup</td><td>2 tsp</td></tr>",
    desc: "The <b>Old Fashioned</b> delivers a rich, smooth flavor with the depth of whiskey, a hint of sweetness from sugar, and aromatic complexity from bitters, all balanced by a citrusy zest from an orange peel garnish. ",
  },
  {
    id: 6,
    imagePath: "./img/dark-and-stormy.png",
    title: "Dark and Stormy",
    recipe: "https://www.liquor.com/recipes/dark-n-stormy/",
    strength: 2,
    rating: 0,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Dark Rum</td><td>2 oz</td></tr><tr><td>Ginger Beer</td><td>4-6 oz</td></tr><tr><td>Lime Juice</td><td>1 oz</td></tr><tr><td>Lime Wedge</td><td>Garnish</td></tr>",
    desc: "The <b>Dark and Stormy</b> offers a bold, spicy flavor with the deep, rich warmth of dark rum balanced by the sharp, zesty kick of ginger beer and a hint of citrusy freshness from lime.",
  },
  {
    id: 7,
    imagePath: "./img/jack-honey-smash.png",
    title: "Jack Honey Smash",
    recipe: "https://www.jackdaniels.com/en-ca/recipes/jack-honey-smash",
    strength: 2,
    rating: 0,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Honey Whiskey</td><td>2 oz</td></tr><tr><td>Mint Leaves</td><td>A few</td></tr><tr><td>Lemon Juice</td><td>1/2 oz</td></tr><tr><td>Simple Syrup</td><td>1/2 0z</td></tr><tr><td>Crushed Ice</td><td>N/A</td></tr>",
    desc: "The <b>Jack Honey Smash</b> offers a refreshing combination of the smooth, honeyed warmth of Jack Daniel’s Tennessee Honey whiskey, bright citrusy notes from muddled lemon, and a hint of mint, creating a sweet and zesty, herbaceous cocktail.",
  },
  {
    id: 8,
    imagePath: "./img/jack-honey-mule.jpg",
    title: "Jack Honey Mule",
    recipe: "https://www.jackdaniels.com/en-us/recipes/Jack-Honey-mule",
    strength: 2,
    rating: 0,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Honey Whiskey</td><td>2 oz</td></tr><tr><td>Ginger Beer</td><td>4-6 oz</td></tr><tr><td>Lemon Wedge</td><td>Garnish</td></tr>",
    desc: "The <b>Jack Honey Mule</b> combines the smooth, honeyed richness of Jack Daniel's Tennessee Honey with the spicy kick of ginger beer and the refreshing tang of lime, creating a sweet, zesty, and slightly spicy cocktail.",
  },
  // { -- No bourbon and no honey syrup
  //   id: 9,
  //   imagePath: "./img/gold-rush.jpg",
  //   title: "Gold Rush",
  //   strength: 2,
  //   ingredients: [
  //     { "What": "Whiskey", "Qty": "2 1/2 oz" },
  //     { "What": "Angostura bitters", "Qty": "3 Drops" },
  //     { "What": "Orange Wedge", "Qty": "1" },
  //     { "What": "Lemon Zest", "Qty": "A bit" },
  //     { "What": "Sugar Cube", "Qty": "1" },
  //     { "What": "Sour Cherries", "Qty": "2" },
  //   ],
  //   in_test: "<tr><td>Bourbon</td><td>2 oz</td></tr><tr><td>Lemon Juice</td><td>3/4 oz</td></tr><tr><td>Honey Syrup</td><td>3/4 oz</td></tr><tr><td>Lemon Twist</td><td>Garnish</td></tr>"
  //   ,desc: "The <b>Jack Honey Mule</b> combines the smooth, honeyed richness of Jack Daniel's Tennessee Honey with the spicy kick of ginger beer and the refreshing tang of lime, creating a sweet, zesty, and slightly spicy cocktail.",
  // },
  {
    id: 10,
    imagePath: "./img/tequil-sunrise (Custom).png",
    title: "Tequila Sunrise",
    recipe: "https://onedishkitchen.com/tequila-sunrise-recipe/",
    strength: 2,
    rating: 5,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Tequila</td><td>1 1/2 oz</td></tr><tr><td>Triple Sec</td><td>3/4 oz</td></tr><tr><td>Lemon Juice</td><td>1/2 oz</td></tr><tr><td>Orange Juice</td><td>4-5 oz</td></tr><tr><td>Grenadine</td><td>1/2 oz</td></tr>",
    desc: "The <b>Tequila Sunrise</b> with Triple Sec has a vibrant, sweet, and citrusy flavor profile, blending the smooth, earthy notes of tequila with the bright, zesty orange and lime from the Triple Sec and grenadine, creating a refreshing, fruity cocktail with a touch of tang.",
  },
  {
    id: 11,
    imagePath: "./img/bloody-caesar.jpg",
    title: "Bloody Caesar",
    recipe: "https://cookthestory.com/the-best-bloody-caesar-recipe/",
    strength: 1,
    rating: 5,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Vodka</td><td>1 1/2 oz</td></tr><tr><td>Clamato</td><td>4 oz</td></tr><tr><td>Caesar Seasoning</td><td>Rim glass</td></tr><tr><td>Lime Juice</td><td>1/2 tsp</td></tr><tr><td>Worcestershire Sauce</td><td>2 Dashes</td></tr><tr><td>Tabasco</td><td>2 Dashes</td></tr><tr><td>Celery</td><td>1 rib</td></tr>",
    desc: "The <b>Bloody Caesar</b> has a savory and tangy flavor profile, combining the briny, umami richness of clamato juice with the heat of vodka, Worcestershire sauce, hot sauce, and a zesty kick of lime, making it a bold and refreshing cocktail with a distinctive, spiced complexity.",
  },
  {
    id: 12,
    imagePath: "./img/long-island-iced-tea.jpg",
    title: "Long Island Iced Tea",
    recipe:
      "https://www.allrecipes.com/recipe/228491/the-real-long-island-iced-tea/",
    strength: 3,
    rating: 3,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Vodka</td><td>1/2 oz</td></tr><tr><td>Rum</td><td>1/2 oz</td></tr><tr><td>Tequila</td><td>1/2 oz</td></tr><tr><td>Triple Sec</td><td>1/2 oz</td></tr><tr><td>Sweet and Sour Mix</td><td>1 oz</td></tr><tr><td>Cola</td><td>1 oz or to taste</td></tr><tr><td>Lemon</td><td>1 Slice</td></tr>",
    desc: "The <b>Long Island Iced Tea</b> has a balanced, refreshing flavor with a mix of citrusy tartness from lemon and lime, sweetness from triple sec and simple syrup, and a slight herbal complexity from the blend of vodka, rum, and tequila, all rounded out by a cola finish.",
  },
  {
    id: 13,
    imagePath: "./img/backyard-iced-tea.png",
    title: "Backyard Iced Tea",
    recipe: "https://www.liquor.com/recipes/back-yard-tea/",
    strength: 1,
    rating: 4,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Spiced Rum</td><td>2 oz</td></tr><tr><td>Lemonade</td><td>2 oz</td></tr><tr><td>Iced Tea</td><td>2 oz</td></tr><tr><td>Lemon Wedge</td><td>Garnish</td></tr>",
    desc: "The <b>Backyard Iced Tea</b> cocktail offers a smooth and refreshing flavor profile, blending the tartness of lemonade with the sweetness of iced tea, enhanced by the warmth of spiced rum for a balanced and invigorating drink.",
  },
  {
    id: 14,
    imagePath: "./img/margarita.png",
    title: "Margarita",
    recipe: "https://www.liquor.com/recipes/margarita/",
    strength: 2,
    rating: 0,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Tequila</td><td>2 oz</td></tr><tr><td>Triple Sec</td><td>1/2 oz</td></tr><tr><td>Lime Juice</td><td>1 oz</td></tr><tr><td>Simple Syrup</td><td>1/2 oz</td></tr><tr><td>Lime Wedge</td><td>Garnish</td></tr>",
    desc: "The <b>Margarita</b> has a refreshing, tangy flavor profile, combining the bright citrus notes of lime with the smooth, slightly bitter taste of tequila, balanced by the sweetness of orange liqueur and a touch of salt on the rim.",
  },
  {
    id: 15,
    imagePath: "./img/vodka-coke.png",
    title: "Vodka and Coke",
    recipe: "https://www.acouplecooks.com/vodka-and-coke/",
    strength: 2,
    rating: 0,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Vodka</td><td>2 oz</td></tr><tr><td>Cola</td><td>4-5 oz</td></tr><tr><td>Lime Juice</td><td>1 oz</td></tr><tr><td>Simple Syrup</td><td>1/4 oz</td></tr>",
    desc: "The <b>Vodka and Coke</b> cocktail has a smooth, slightly sweet flavor, with the crisp, neutral taste of vodka complementing the rich, caramel and fizzy sweetness of cola.",
  },
  {
    id: 16,
    imagePath: "./img/rum-coke.png",
    title: "Rum and Coke",
    recipe: "https://www.thespruceeats.com/rum-and-coke-recipe-760560",
    strength: 2,
    rating: 4,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Dark Rum</td><td>2 oz</td></tr><tr><td>Cola</td><td>4-6 oz</td></tr><tr><td>Lime Wedge</td><td>Garnish</td></tr>",
    desc: "The <b>Rum and Coke</b> cocktail has a smooth, slightly sweet flavor, with the rich, molasses-like taste of rum blending harmoniously with the caramel and fizzy sweetness of cola.",
  },
  {
    id: 17,
    imagePath: "./img/Caipiroska.png",
    title: "Caipiroska",
    recipe: "https://www.liquor.com/recipes/caipiroska-2/",
    strength: 3,
    rating: 4,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Vodka</td><td>2 oz</td></tr><tr><td>Simple Syrup</td><td>1 oz</td></tr><tr><td>Lime</td><td>Quarters</td></tr><tr><td>Lime Wedge</td><td>Garnish</td></tr>",
    desc: "The <b>Caipiroska</b> has a refreshing, tangy flavor, with the muddled lime providing a zesty citrus punch, balanced by the smoothness of vodka and a touch of sweetness from sugar.",
  },
  {
    id: 18,
    imagePath: "./img/screwdriver.jpg",
    title: "Screwdriver",
    recipe: "https://www.allrecipes.com/recipe/222410/screwdriver-cocktail/",
    strength: 1,
    rating: 0,
    ingredients: [
      { What: "Whiskey", Qty: "2 1/2 oz" },
      { What: "Angostura bitters", Qty: "3 Drops" },
      { What: "Orange Wedge", Qty: "1" },
      { What: "Lemon Zest", Qty: "A bit" },
      { What: "Sugar Cube", Qty: "1" },
      { What: "Sour Cherries", Qty: "2" },
    ],
    in_test:
      "<tr><td>Vodka</td><td>1/2 oz</td></tr><tr><td>Orange Juice</td><td>6 oz</td></tr><tr><td>Orange Slice</td><td>Garnish</td></tr>",
    desc: "The <b>Screwdriver</b> has a simple, refreshing flavor, with the bright, tangy citrus notes of orange juice perfectly balanced by the smooth, neutral taste of vodka.",
  },
];

const cardContainer = document.querySelector(".cocktail-div");

function clearCookie() {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

function setCookie(cName, cValue) {
  
  document.cookie = cName + "=" + cValue + ";";
}

function calc_Str(strength) {
  var returnArray = [];
  if (strength == 1) {
    returnArray.push(
      "border-end rounded-start border-3 border-light col-3 level tasting-bar active"
    );
    returnArray.push(
      "border-start border-end border-light col-3 level tasting-bar"
    );
    returnArray.push(
      "border-start rounded-end border-3 border-light col-3 level tasting-bar"
    );
  } else if (strength == 2) {
    returnArray.push(
      "border-end rounded-start border-3 border-light col-3 level tasting-bar active"
    );
    returnArray.push(
      "border-start border-end border-light col-3 level tasting-bar active"
    );
    returnArray.push(
      "border-start rounded-end border-3 border-light col-3 level tasting-bar"
    );
  } else if (strength == 3) {
    returnArray.push(
      "border-end rounded-start border-3 border-light col-3 level tasting-bar active"
    );
    returnArray.push(
      "border-start border-end border-light col-3 level tasting-bar active"
    );
    returnArray.push(
      "border-start rounded-end border-3 border-light col-3 level tasting-bar active"
    );
  }
  return returnArray;
}

function calc_Rank(rating) {
  let returnArray = [];
  if (rating == 1) {
    returnArray.push("fa fa-star");
  } else if (rating == 2) {
    returnArray.push("fa fa-star");
  } else if (rating == 3) {
    returnArray.push("fa fa-star");
  } else if (rating == 4) {
    returnArray.push("fa fa-star");
  } else if (rating == 5) {
    returnArray.push("fa fa-star");
  } else {
    returnArray.push("");
  }

  // for (let i = 1; i <= rating; i++){
  //   console.log(i)
  // }

  for (let x = 1; x <= 5; x++) {
    if (x <= rating) {
      returnArray.push("active");
    } else {
      returnArray.push("");
    }
  }

  return returnArray;
}

function sortTitle(dataArray) {
  let res = dataArray.reduce((acc, curr) => {
    let ind = acc.findIndex((item) => item.title > curr.title);
    if (ind === -1) ind = acc.length;
    acc.splice(ind, 0, curr);
    return acc;
  }, []);

  return res;
}

function sortRatingReverse() {
  // arrayData.sort((a,b) => a.rating - b.rating)
  // arrayData.reverse()
  setCookie("sort", "RatingReverse")


  location.reload();
}

function sortRating() {
  // arrayData.sort((a,b) => a.rating - b.rating)
  setCookie("sort", "Rating")

  location.reload();
}

function sortTitle() {
  // arrayData.sort((a,b) => a.rating - b.rating)
  setCookie("sort", "Title")
  location.reload();
}

function sortTitleReverse() {
  // arrayData.sort((a,b) => a.rating - b.rating)
  setCookie("sort", "TitleReverse")
  location.reload();
}

function sortStrengthReverse() {
  // arrayData.sort((a,b) => a.strength - b.strength)
  // arrayData.reverse()
  setCookie("sort", "StrengthReverse")
  location.reload();
}

function sortStrength() {
  // arrayData.sort((a,b) => a.strength - b.strength)
  setCookie("sort", "Strength")
  location.reload();
}

function sortID() {
  // arrayData.sort((a,b) => a.id - b.id)
  setCookie("sort", "ID")
  location.reload();
}

function baseAll(){
  setCookie("base", "All")
  location.reload();
}

function baseVodka(){
  setCookie("base", "Vodka")
  location.reload();
}

function baseRum(){
  setCookie("base", "Rum")
  location.reload();
}

function baseTequila(){
  setCookie("base", "Tequila")
  location.reload();
}

function baseWhiskey(){
  setCookie("base", "Whiskey")
  location.reload();
}

function baseTripleSec(){
  setCookie("base", "TripleSec")
  location.reload();
}

function startCookie(){
  currentCookies = document.cookie
  console.log(currentCookies)
  if(currentCookies == ""){
    console.log("Cookies empty")
    // var sort = [''].join(',');
    // document.cookie = 'sort=' + sort;

    // var base = [''].join(',')
    // document.cookie = 'base=' + base;
  }
  
  setCookie("sort", "")
  setCookie("base", "All")

  postMethods();
  
}

function getBase(){
  base = document.cookie
  if (base.includes("All")){
    return ""
  } else if (base.includes("Vodka")){
    return "Vodka"
  } else if (base.includes("Tequila")){
    return "Tequila"
  } else if (base.includes("Rum")){
    return "Rum"
  } else if (base.includes("TripleSec")){
    return "Triple Sec"
  } else if (base.includes("Whiskey")){
    return "Whiskey"
  }

}

// const functionCards = () => {
//   if (document.cookie == "sortRatingReverse") {
//     arrayData.sort((a, b) => a.rating - b.rating);
//     arrayData.reverse();
//   } else if (document.cookie == "sortRating") {
//     arrayData.sort((a, b) => a.rating - b.rating);
//   } else if (document.cookie == "sortStrengthReverse") {
//     arrayData.sort((a, b) => a.strength - b.strength);
//     arrayData.reverse();
//   } else if (document.cookie == "sortTitle") {
//     arrayData.sort((a, b) => {
//       if (a.title < b.title) {
//         return -1;
//       }
//     });
//   } else if (document.cookie == "sortTitleReverse") {
//     arrayData.sort((a, b) => {
//       if (a.title > b.title) {
//         return -1;
//       }
//     });
//   } else if (document.cookie == "sortStrength") {
//     arrayData.sort((a, b) => a.strength - b.strength);
//   } else {
//     arrayData.sort((a, b) => a.id - b.id);
//   }

//   arrayData.map((data) => {
//     strArray = calc_Str(data.strength);
//     var strStart = strArray[0];
//     var strMiddle = strArray[1];
//     var strEnd = strArray[2];

//     ratingArray = calc_Rank(data.rating);
//     var hasStar = ratingArray[0];
//     var star1Active = ratingArray[1];
//     var star2Active = ratingArray[2];
//     var star3Active = ratingArray[3];
//     var star4Active = ratingArray[4];
//     var star5Active = ratingArray[5];

//     if (data.rating == 0) {
//       var rating = "N/A";
//     } else {
//       var rating = data.rating;
//     }

//     cardContainer.innerHTML += `
//         <div class="container cocktail-div poppins-regular"> 
//           <div class="cocktail-card">
//           <!-- Create 1 Main row, the rest are nested inside-->
//           <div class="row">
//             <!-- Vertical Seperator Column-->
//             <div class="col-1" style="width: 10px">
//               <div class="vr" style="height: 100%"></div>
//             </div>
//             <!-- The other columns, containing title - desc - ingredients -->
//             <div class="col-11">
//               <!-- Row containing image - title - ingredients-->
//               <div class="row">
//                 <!-- Picture div-->
//                 <div class="col-sm-12 col-md-6 order-sm-1 order-md-1">
//                 <a href=${data.recipe}>
//                   <img
//                     src="${data.imagePath}"
//                     class="img-fluid rounded mx-auto d-block cocktail-img"
//                     alt="Moscow Mule Cocktail"
//                   />
//                 </a>
//                 </div>
//                 <!-- Title, Description and ingredients-->
//                 <div class="col-sm-12 col-md-6 order-sm-2 order-md-2">
//                   <h1 class="poppins-bold">${data.title}</h1>
//                   <!-- Strength meter -->
//                   <h4 class="poppins-regular-italic">Strength</h4>
//                   <div class="row tasting-container">
//                     <div class="${strStart}"></div>
//                     <div class="${strMiddle}"></div>
//                     <div class="${strEnd}"></div>
//                   </div>
//                   <div class="row ranking-container">
//                     <h4 class="poppins-regular-italic" style="padding-top:5px; margin-bottom: 10px";>Rating</h4>
//                       <div class="col-2 star-ranking"><span class="star-ranking">${rating}</span> <div class="${hasStar}" style="color: #576e52;"></div></div>
//                       <div class="col-2 ranking-meter rounded-start ${star1Active}"></div>
//                       <div class="col-2 ranking-meter ${star2Active}"></div>
//                       <div class="col-2 ranking-meter ${star3Active}"></div>
//                       <div class="col-2 ranking-meter ${star4Active}"></div>
//                       <div class="col-2 ranking-meter rounded-end ${star5Active}"></div>
//                   </div>
//                   <h3>Ingredients :</h3>
//                   <table class="table ingredients-table">
//                     <thead>
//                       <tr>
//                         <th scope="col">What</th>
//                         <th scope="col">Qty</th>
//                       </tr>
//                     </thead>
//                     <tbody>${data.in_test}</tbody>
//                   </table>
//                 </div>
//               </div>
//               <!-- Row containing desc -->
//               <div class="row">
//                 <p class="desc">${data.desc}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>`;
//   });
// };

// functionCards()

const postContainer = document.querySelector('.cocktail-div')

const postMethods = () => {
  if (document.cookie.includes("sort=RatingReverse")) {
    arrayData.sort((a, b) => a.rating - b.rating);
    arrayData.reverse();
  } else if (document.cookie.includes("sort=Rating")) {
    arrayData.sort((a, b) => a.rating - b.rating);
  } else if (document.cookie.includes("sort=StrengthReverse")) {
    arrayData.sort((a, b) => a.strength - b.strength);
    arrayData.reverse();
  } else if (document.cookie.includes("sort=Title")) {
    arrayData.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
    });
  } else if (document.cookie.includes("sort=TitleReverse")) {
    arrayData.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      }
    });
  } else if (document.cookie.includes("sort=Strength")) {
    arrayData.sort((a, b) => a.strength - b.strength);
  } else {
    arrayData.sort((a, b) => a.id - b.id);
  }

  arrayData.map((data) => {
    strArray = calc_Str(data.strength);
    var strStart = strArray[0];
    var strMiddle = strArray[1];
    var strEnd = strArray[2];

    ratingArray = calc_Rank(data.rating);
    var hasStar = ratingArray[0];
    var star1Active = ratingArray[1];
    var star2Active = ratingArray[2];
    var star3Active = ratingArray[3];
    var star4Active = ratingArray[4];
    var star5Active = ratingArray[5];

    if (data.rating == 0) {
      var rating = "N/A";
    } else {
      var rating = data.rating;
    }

    const postElement = document.createElement('div');
    postElement.classList.add("cocktail-card");
    postElement.innerHTML = `
    <div class="container cocktail-div poppins-regular"> 
      <div class="cocktail-card">
      <!-- Create 1 Main row, the rest are nested inside-->
      <div class="row">
        <!-- Vertical Seperator Column-->
        <div class="col-1" style="width: 10px">
          <div class="vr" style="height: 100%"></div>
        </div>
        <!-- The other columns, containing title - desc - ingredients -->
        <div class="col-11">
          <!-- Row containing image - title - ingredients-->
          <div class="row">
            <!-- Picture div-->
            <div class="col-sm-12 col-md-6 order-sm-1 order-md-1">
            <a href=${data.recipe}>
              <img
                src="${data.imagePath}"
                class="img-fluid rounded mx-auto d-block cocktail-img"
                alt="${data.title}"
              />
            </a>
            </div>
            <!-- Title, Description and ingredients-->
            <div class="col-sm-12 col-md-6 order-sm-2 order-md-2">
              <h1 class="poppins-bold">${data.title}</h1>
              <!-- Strength meter -->
              <h4 class="poppins-regular-italic">Strength</h4>
              <div class="row tasting-container">
                <div class="${strStart}"></div>
                <div class="${strMiddle}"></div>
                <div class="${strEnd}"></div>
              </div>
              <div class="row ranking-container">
                <h4 class="poppins-regular-italic" style="padding-top:5px; margin-bottom: 10px";>Rating</h4>
                  <div class="col-2 star-ranking"><span class="star-ranking">${rating}</span> <div class="${hasStar}" style="color: #576e52;"></div></div>
                  <div class="col-2 ranking-meter rounded-start ${star1Active}"></div>
                  <div class="col-2 ranking-meter ${star2Active}"></div>
                  <div class="col-2 ranking-meter ${star3Active}"></div>
                  <div class="col-2 ranking-meter ${star4Active}"></div>
                  <div class="col-2 ranking-meter rounded-end ${star5Active}"></div>
              </div>
              <h3>Ingredients :</h3>
              <table class="table ingredients-table">
                <thead>
                  <tr>
                    <th scope="col">What</th>
                    <th scope="col">Qty</th>
                  </tr>
                </thead>
                <tbody>${data.in_test}</tbody>
              </table>
            </div>
          </div>
          <!-- Row containing desc -->
          <div class="row">
            <p class="desc">${data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  // postContainer.appendChild(postElement);

    base = getBase()

  if (data.in_test.includes(getBase())){
    postContainer.appendChild(postElement);
  }
  });
};

window.onload = function() {
  startCookie();
};
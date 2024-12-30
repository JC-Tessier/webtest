const arrayData = [
{
    id:1,
    title: "Absolut Vodka",
    imagePath: "../img/ingredients/Absolut_vodka_bottle.png",
    qty: 4,
    base: "Vodka"
  },
  {
    id:2,
    title: "Legendario Rum",
    imagePath: "../img/ingredients/legendario.png",
    qty: 0,
    base: "Rum"
  },
  {
    id:3,
    title: "Kraken Spiced Rum",
    imagePath: "../img/ingredients/kraken-spiced-rum.png",
    qty: 5,
    base: "Rum"
  },
  {
    id:4,
    title: "Mango Rum",
    imagePath: "../img/ingredients/mango-rum.png",
    qty: 5,
    base: "Rum"
  },
  {
    id:5,
    title: "Whiskey Jack Daniels",
    imagePath: "../img/ingredients/jack-honey.png",
    qty: 5,
    base: "Whiskey"
  },
  {
    id:6,
    title: "Triple Sec",
    imagePath: "../img/ingredients/triple-sec.png",
    qty: 4,
    base: "Triple Sec"
  },
  {
    id:7,
    title: "Cherry River Tequila",
    imagePath: "../img/ingredients/tequila.png",
    qty: 4,
    base: "Tequila"
  },
  {
    id:8,
    title: "Iced Tea",
    imagePath: "../img/ingredients/",
    qty: 5,
    base: "Iced Tea"
  },
  {
    id:9,
    title: "Lemonade",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Lemonade"
  },
  {
    id:10,
    title: "Orange Juice",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Orange Juice"
  },
  {
    id:11,
    title: "Ginger Beer",
    imagePath: "../img/ingredients/",
    qty: 5,
    base: "Ginger Beer"
  },
  {
    id:12,
    title: "Cola",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Cola"
  },
  {
    id:13,
    title: "Cola",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Cola"
  },
  {
    id:14,
    title: "Club Soda",
    imagePath: "../img/ingredients/",
    qty: 5,
    base: "Club Soda"
  },
  {
    id:15,
    title: "Tonic Water",
    imagePath: "../img/ingredients/",
    qty: 5,
    base: "Tonic Water"
  },
  {
    id:16,
    title: "Simple Syrup",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Simple Syrup"
  },
  {
    id:17,
    title: "Grenadine",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Grenadie"
  },
  {
    id:18,
    title: "Lime",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Lime"
  },
  {
    id:19,
    title: "Lemon",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Lemon"
  },
  {
    id:20,
    title: "Orange",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Orange"
  },
  {
    id:21,
    title: "Celery",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Celery"
  },
  {
    id:22,
    title: "Worcestershire Sauce",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Worcestershire Sauce"
  },
  {
    id:23,
    title: "Tabasco",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Tabasco"
  },
  {
    id:24,
    title: "Aromatic Bitters",
    imagePath: "../img/ingredients/",
    qty: 4,
    base: "Aromatic Bitters"
  },
  {
    id:25,
    title: "Orange Bitters",
    imagePath: "../img/ingredients/",
    qty: 5,
    base: "Orange Bitters"
  },
];

function clearCookie() {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
}

function setCookie(cName, cValue) {
  document.cookie = cName + "=" + cValue + ";";
  console.log("setCookie" + " " + cName + " '" + cValue + "'");
}

function calc_Str(qty) {
    let returnArray = [];
    for (let x = 1; x <= 5; x++) {
        if (x <= qty) {
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
  setCookie("sort", "RatingReverse");

  location.reload();
}

function sortRating() {
  // arrayData.sort((a,b) => a.rating - b.rating)
  setCookie("sort", "Rating");

  location.reload();
}

function sortTitle() {
  // arrayData.sort((a,b) => a.rating - b.rating)
  setCookie("sort", "Title");
  location.reload();
}

function sortTitleReverse() {
  // arrayData.sort((a,b) => a.rating - b.rating)
  setCookie("sort", "TitleReverse");
  location.reload();
}

function sortStrengthReverse() {
  // arrayData.sort((a,b) => a.strength - b.strength)
  // arrayData.reverse()
  setCookie("sort", "StrengthReverse");
  location.reload();
}

function sortStrength() {
  // arrayData.sort((a,b) => a.strength - b.strength)
  setCookie("sort", "Strength");
  location.reload();
}

function sortID() {
  // arrayData.sort((a,b) => a.id - b.id)
  setCookie("sort", "ID");
  location.reload();
}

function startCookie() {
  currentCookies = document.cookie;
  const diffCookies = currentCookies.split(";");
  console.log(diffCookies);
  // if(diffCookies[0] != "sort=" && diffCookies[1] != "sort="){
  //   console.log(diffCookies)
  //   console.log("Cookies sort empty")
  //   // var sort = [''].join(',');
  //   // document.cookie = 'sort=' + sort;

  //   // var base = [''].join(',')
  //   // document.cookie = 'base=' + base;
  //   setCookie("sort", "")
  //   setCookie("base", "All")
  // }

  postMethods();
}

const postContainer = document.querySelector(".main-table-div");

const postMethods = () => {
  // if (document.cookie.includes("sort=RatingReverse")) {
  //   arrayData.sort((a, b) => a.rating - b.rating);
  //   arrayData.reverse();
  // } else if (document.cookie.includes("sort=Rating")) {
  //   arrayData.sort((a, b) => a.rating - b.rating);
  // } else if (document.cookie.includes("sort=StrengthReverse")) {
  //   arrayData.sort((a, b) => a.strength - b.strength);
  //   arrayData.reverse();
  // } else if (document.cookie.includes("sort=Title")) {
  //   arrayData.sort((a, b) => {
  //     if (a.title < b.title) {
  //       return -1;
  //     }
  //   });
  // } else if (document.cookie.includes("sort=TitleReverse")) {
  //   arrayData.sort((a, b) => {
  //     if (a.title > b.title) {
  //       return -1;
  //     }
  //   });
  // } else if (document.cookie.includes("sort=Strength")) {
  //   arrayData.sort((a, b) => a.strength - b.strength);
  // } else {
  //   arrayData.sort((a, b) => a.id - b.id);
  // }

  arrayData.map((data) => {
      
      qtyArray = calc_Str(data.qty);
      var qtyActive1 = qtyArray[0];
      var qtyActive2 = qtyArray[1];
      var qtyActive3 = qtyArray[2];
      var qtyActive4 = qtyArray[3];
      var qtyActive5 = qtyArray[4];


    //   if (data.qty == 0) {
    //     var qty = "N/A";
    //   } else {
    //     var qty = data.rating;
    //   }

    const postElement = document.createElement("div");
    postElement.classList.add("cocktail-card");
    postElement.innerHTML = `
      <div class="row main-content-row">
      <div class="col-4 img-div">
        <img src="${data.imagePath}" alt="${data.title}" class="ingredient-img">
      </div>
      <div class="col-8 details-div">
        <h2 class="ingredient-title">${data.title}</h2>
        <p class="ingredient-qty">Quantity Left</p>
          <div class="row qty-container">
            <div class="border-end rounded-start border-3 border-light col-2 level qty-meter ${qtyActive1}"></div>
            <div class="col-2 level qty-meter ${qtyActive2}"></div>
            <div class="border-start border-end border-3 border-light col-2 level qty-meter ${qtyActive3}"></div>
            <div class="col-2 level qty-meter ${qtyActive4}"></div>
            <div class="border-start rounded-end border-3 border-light col-2 level qty-meter ${qtyActive5}"></div>
          </div>
      </div>
    </div>`;
    postContainer.appendChild(postElement);
  });
};

window.onload = function () {
  startCookie();
};

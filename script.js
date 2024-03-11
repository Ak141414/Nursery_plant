var show = document.getElementsByClassName(
  "we-offer-a-wide-range-of-perennials-including-flowering-perennials-grasses-and-groundcovers-they-are-perfect-for-adding-color-and-texture-to-your-garden-1Ek"
);

var ans = document.getElementsByClassName("group-18-sVv");
var rect = document.getElementsByClassName("rectangle-19-QVr");

var display = 1;

var employee = [
  {
    name: "Joseph chuckman",
    location: "USA",
    description: `"The customer service Nice. Thank you!"`,

    image: "testimonial-1",
  },
  {
    name: "Ana",
    location: "Italy",
    description: `"The customer service was WOW . Thank you!"`,

    image: "testimonial-2",
  },
  {
    name: "Mark",
    location: "Italy",
    description: `"The customer service Good. Thank you!"`,

    image: "testimonial-4",
  },
  {
    name: "John",
    location: "France",
    description: `"The customer service Nice. Thank you!"`,

    image: "testimonial-3",
  },
  {
    name: "Ben",
    location: "Austrila",
    description: `"The customer service Better. Thank you!"`,

    image: "testimonial-5",
  },
];

let screenWidth = window.innerWidth;
let start = 0;
let end = 0;

if (screenWidth <= 1200) {
  end = employee.length > 1 ? 1 : employee.length;
} else {
  end = employee.length > 3 ? 3 : employee.length;
}

const populateEmployeeCards = (next = false, prev = false) => {
  let customerData = ``;
  if (next === true) {
    start += 1;
    end += 1;
  } else if (prev === true) {
    start -= 1;
    end -= 1;
  }
  employee.slice(start, end).forEach((value) => {
    customerData += `<div class="group-23-McQ">
    <img class="testimonial-1-412" src="./assets/${value.image}.png"/>
    <p class="the-customer-service-representative-i-spoke-with-was-extremely-helpful-and-resolved-my-issue-in-no-time-thank-you-MF2">
    ${value.description}
    </p>
    <p class="joseph-chuckman-usa-14g">- ${value.name}, ${value.location}</p>
  </div>
      `;
  });
  document.getElementById("customer-cards").innerHTML = customerData;
  if (start === 0) {
    document.getElementById("move-left").classList.add("disabled");
    document.getElementById("move-left").onclick = null;
  } else {
    document.getElementById("move-left").classList.remove("disabled");
    document.getElementById("move-left").onclick = () =>
      populateEmployeeCards(false, true);
  }
  if (end == employee.length) {
    document.getElementById("move-right").classList.add("disabled");
    document.getElementById("move-right").onclick = null;
  } else {
    document.getElementById("move-right").classList.remove("disabled");
    document.getElementById("move-right").onclick = () =>
      populateEmployeeCards(true);
  }
};

window.addEventListener("resize", () => {
  const newScreenWidth = window.innerWidth;
  if (screenWidth > 1200) {
    if (newScreenWidth <= 1200) {
      start = 0;
      end = employee.length > 1 ? 1 : employee.length;
      populateEmployeeCards();
    }
  } else {
    if (newScreenWidth > 1200) {
      start = 0;
      end = employee.length > 3 ? 3 : employee.length;
      populateEmployeeCards();
    }
  }
  screenWidth = newScreenWidth;
});

const imagesList = [
  "gallery-1",
  "gallery-2",
  "gallery-3",
  "gallery-4",
  "gallery-5",
];
let currentIndex = 0;
let imageInterval = null;

const imageCarousel = (index = null) => {
  if (index !== null) {
    currentIndex = index;
  }
  const carouselImageElement = `<img class="gallery-1-xoe" src="./assets/${imagesList[currentIndex]}.png" />`;
  document.getElementById("carosel").innerHTML = carouselImageElement;
  const eclipsesChildren = document.getElementById("carosel-buttons").children;
  for (let i = 0; i < eclipsesChildren.length; i++) {
    if (currentIndex === i) {
      eclipsesChildren[i].classList.add("background-black");
    } else {
      eclipsesChildren[i].classList.remove("background-black");
    }
  }
  currentIndex = (currentIndex + 1) % imagesList.length;
};

const populateCaroselButtons = () => {
  let caroselButtons = "";
  imagesList.forEach((v, index) => {
    caroselButtons += `<div class="ellipse" onclick="showImage(${index})"></div>`;
  });
  document.getElementById("carosel-buttons").innerHTML = caroselButtons;
};

const showImage = (index) => {
  clearInterval(imageInterval);
  imageCarousel(index);
  imageInterval = setInterval(resetTimeInterval, 10000);
};

const resetTimeInterval = () => {
  imageCarousel();
  clearInterval(imageInterval);
  imageInterval = setInterval(imageCarousel, 5000);
};

var questions = [
  {
    question: "Why Perennials used in our works?",
    answer:
      "We offer a wide range of perennials, including flowering perennials, grasses, and groundcovers.",
  },
  {
    question: "How should we manage indoor plants?",
    answer: "Regular sunning is essential & Don't overwater",
  },
  {
    question: "What is shrubs?",
    answer: "Plants with branches that grow near the stem",
  },
];
var displayList = [];

const accordianQuestion = () => {
  let accButton = "";
  displayList = [];
  questions.forEach((value, index) => {
    displayList.push(1);
    accButton += `<div id="acc-button-group-${index}" class="group-18-sVv" onclick="hideShow(${index})">
    <img id="acc-button-rectangle-${index}" class="rectangle-19-QVr" src="./assets/rectangle-19.png" />
    <div class="auto-group-vr47-YMA">
      <p class="why-perennials-used-in-our-works-5bz">
        ${value.question}
      </p>
      <p
        id="acc-button-answer-${index}"
        class="we-offer-a-wide-range-of-perennials-including-flowering-perennials-grasses-and-groundcovers-they-are-perfect-for-adding-color-and-texture-to-your-garden-1Ek"
      >
        ${value.answer}
    </p>
    </div>
  </div>`;
  });
  document.getElementById("accButton").innerHTML = accButton;
};

const hideShow = (index) => {
  var ans = document.getElementById(`acc-button-group-${index}`);
  var show = document.getElementById(`acc-button-answer-${index}`);
  var rect = document.getElementById(`acc-button-rectangle-${index}`);
  if (displayList[index] === 1) {
    rect.style.height = "11rem";
    ans.style.height = "11rem";
    show.style.display = "block";
    displayList[index] = 0;
  } else {
    rect.style.height = "10rem ";
    ans.style.height = "10rem";
    show.style.display = "none";
    displayList[index] = 1;
  }
};

var displayMenu = 1;
const showNavbar = () => {
  var nav = document.getElementById("menu-bar");

  if (displayMenu === 1) {
    nav.style.display = "flex";
    displayMenu = 0;
  } else {
    nav.style.display = "none";
    displayMenu = 1;
  }
};

const afterDOMLoaded = () => {
  populateCaroselButtons();
  imageCarousel();
  populateEmployeeCards();
  accordianQuestion();
  imageInterval = setInterval(imageCarousel, 5000);
};
document.addEventListener("DOMContentLoaded", afterDOMLoaded);

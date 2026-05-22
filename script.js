const foodContainer =
document.getElementById("foodContainer");

const cartItems =
document.getElementById("cartItems");

const totalPrice =
document.getElementById("totalPrice");

const darkModeBtn =
document.getElementById("darkModeBtn");

const loginBtn =
document.getElementById("loginBtn");

const loginModal =
document.getElementById("loginModal");

const loginSubmit =
document.getElementById("loginSubmit");

const loginMessage =
document.getElementById("loginMessage");

const checkoutForm =
document.getElementById("checkoutForm");

const formMessage =
document.getElementById("formMessage");


let cart = [];


// FOOD DATA

const foods = [

  {
    id:1,
    name:"Burger",
    price:295,
    image:"image/burger.jpg"
  },

  {
    id:2,
    name:"Pizza",
    price:420,
    image:"image/pizza.jpg"
  },

  {
    id:3,
    name:"Pasta",
    price:220,
    image:"image/pasta.jpg"
  },

  {
    id:4,
    name:"Fried Chicken",
    price:400,
    image:"image/chickenfry.jpg"
  },

  {
    id:5,
    name:"Sandwich",
    price:350,
    image:"image/sandwich.jpg"
  },

  {
    id:6,
    name:"Ice Cream",
    price:250,
    image:"image/icecream.jpg"
  },

   {
    id:7,
    name:"Bread Crossant",
    price:220,
    image:"image/crossant.jpg"
  },

   {
    id:8,
    name:"Pastry Cake",
    price:280,
    image:"image/pastry.jpg"
  },

];


// DISPLAY FOODS

foods.forEach(food => {

  const card =
  document.createElement("div");

  card.classList.add("food-card");

  card.innerHTML = `

    <img src="${food.image}">

    <div class="food-info">

      <h3>${food.name}</h3>

      <p>Fresh and delicious food</p>

      <h4>৳${food.price}</h4>

      <button onclick="addToCart(${food.id})">

        Add To Cart

      </button>

    </div>

  `;

  foodContainer.appendChild(card);

});


// ADD TO CART

function addToCart(id){

  const selectedFood =
  foods.find(food => food.id === id);

  cart.push(selectedFood);

  displayCart();

  alert(selectedFood.name + " Added To Cart");

}


// DISPLAY CART

function displayCart(){

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item,index)=>{

    total += item.price;

    const div =
    document.createElement("div");

    div.classList.add("cart-item");

    div.innerHTML = `

      <div>

        <h4>${item.name}</h4>

        <p>৳${item.price}</p>

      </div>

      <button onclick="removeItem(${index})">

        Remove

      </button>

    `;

    cartItems.appendChild(div);

  });

  totalPrice.innerText = total;

}


// REMOVE ITEM

function removeItem(index){

  cart.splice(index,1);

  displayCart();

}


// DARK MODE

darkModeBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("dark-mode");

});


// LOGIN MODAL

loginBtn.addEventListener("click", ()=>{

  loginModal.classList.remove("hidden");

});


// LOGIN SYSTEM

loginSubmit.addEventListener("click", ()=>{

  const email =
  document.getElementById("loginEmail").value;

  const password =
  document.getElementById("loginPassword").value;


  if(
    email === "admin@gmail.com"
    &&
    password === "12345"
  ){

    loginMessage.style.color = "green";

    loginMessage.innerText =
    "Login Successful";

    setTimeout(()=>{

      loginModal.classList.add("hidden");

    },1000);

  }

  else{

    loginMessage.style.color = "red";

    loginMessage.innerText =
    "Invalid Email or Password";

  }

});


// CHECKOUT FORM

checkoutForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  const payment =
  document.getElementById("payment").value;

  const delivery =
  document.querySelector(
    'input[name="delivery"]:checked'
  );

  const terms =
  document.getElementById("terms").checked;


  if(
    name === "" ||
    email === "" ||
    password === "" ||
    payment === "" ||
    !delivery
  ){

    formMessage.style.color = "red";

    formMessage.innerText =
    "Please Fill All Fields";

    return;

  }


  if(!email.includes("@")){

    formMessage.style.color = "red";

    formMessage.innerText =
    "Invalid Email";

    return;

  }


  if(!terms){

    formMessage.style.color = "red";

    formMessage.innerText =
    "Accept Terms & Conditions";

    return;

  }


  formMessage.style.color = "green";

  formMessage.innerText =
  "Order Placed Successfully 🎉";

  alert("Food Order Successful");

  checkoutForm.reset();

});
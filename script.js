            let cartCount = 0;
function addtoSave()
{
    alert("Do You Want To Save your login ! ");
}
function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('Item added to cart! Total items: ' + cartCount);
}
function addtoAlert()
{
    alert("Your Order Placed Successfully ");
}
function addtoSubmit()
{
    alert("Select Place an Order ");
}
function createBook(title, price, author, thumbnail) {
    let html=`<div class="book">
                <img src="${thumbnail}" alt="Book 1">
                <h3>${title}</h3>
                <p>Author: ${author}</p>
                <p>Price: $${price}</p>
                <button onclick="addToCart()">Add to Cart</button><br><br>
            <button><a href="pay.html">Buy Now</a></button>
            </div>`
            document.querySelector(".book-list").innerHTML=document.querySelector(".book-list").innerHTML+html
}
function competativeBook(title, price, author, thumbnail)
{
let html2=`<div class="book">
                <img src="${thumbnail}" alt="Book 1">
                <h3>${title}</h3>
                <p>Author: ${author}</p>
                <p>Price: $${price}</p>
                <button onclick="addToCart()">Add to Cart</button><br><br>
            <button><a href="pay.html">Buy Now</a></button>
            </div>`
            document.querySelector(".book-list2").innerHTML=document.querySelector(".book-list2").innerHTML+html2
}
function otherBooks(title, price, author, thumbnail)
{
let html3=`<div class="book">
                <img src="${thumbnail}" alt="Book 3">
                <h3>${title}</h3>
                <p>Author: ${author} </p>
                <p>Price: $${price}</p>
                <button onclick="addToCart()">Add to Cart</button><br><br>
                <button><a href="pay.html">Buy Now</a></button>

            </div>`
            document.querySelector(".book-list3").innerHTML=document.querySelector(".book-list3").innerHTML+html3

}

createBook("C++",29.99,"Bjarne swan","https://m.media-amazon.com/images/I/5197qo6Q1GL._SY466_.jpg");
createBook("JAVA+DSA",39.99,"Arunkumar","https://m.media-amazon.com/images/I/61VZmI-+FKL._SX342_SY445_.jpg");
createBook("Python",59.99,"guido krish","https://m.media-amazon.com/images/I/61g-kWNVynL._AC_UY327_FMwebp_QL65_.jpg");
createBook("Bootstrap",19.99,"Jacobvarma","https://m.media-amazon.com/images/I/71fjVSk2aEL._AC_UY327_FMwebp_QL65_.jpg");
createBook("Mern Stack",49.99,"Biswaskedar","https://m.media-amazon.com/images/I/51fJDInYIFL._AC_UY327_FMwebp_QL65_.jpg");
createBook("Web Design",50.99,"Tim berners","https://m.media-amazon.com/images/I/51TeYJtP-QL._AC_UY327_FMwebp_QL65_.jpg");
createBook("Software Engenering at Google ",50.99,"Tim berners","https://m.media-amazon.com/images/I/71ryLkyTCYL._AC_UY327_FMwebp_QL65_.jpg");
competativeBook("Arthemetic",30.11,"Agarvalshet","https://m.media-amazon.com/images/I/81FMxIoyw9L._AC_UY327_FMwebp_QL65_.jpg");
competativeBook("Indian Polity",30.11,"arunk","https://m.media-amazon.com/images/I/71CrTyKsazL._AC_UL960_FMwebp_QL65_.jpg");
competativeBook("GeneralKnowledge",30.11,"arunkumar","https://m.media-amazon.com/images/I/71fC0J0HYQL._AC_UY327_FMwebp_QL65_.jpg");
competativeBook("English",30.11,"joshini","https://m.media-amazon.com/images/I/71qOkEKthWL._AC_UY327_FMwebp_QL65_.jpg");
competativeBook("Reasoning",30.11,"suryadon","https://m.media-amazon.com/images/I/81YfoB5cg+L._AC_UY327_FMwebp_QL65_.jpg");
competativeBook("General Science",30.11,"jakoobkan","https://m.media-amazon.com/images/I/71vE29iJxnL._AC_UY327_FMwebp_QL65_.jpg");
competativeBook("UPSC Civil Services",84.11,"Mrunal Patel","https://m.media-amazon.com/images/I/81P-qQVapBL._AC_UY327_FMwebp_QL65_.jpg");
otherBooks("Roll Of the Dice",25.99 ,"Anand Nelakantam","https://m.media-amazon.com/images/I/71i5QlcHBAL._AC_UY327_FMwebp_QL65_.jpg")
otherBooks("Story Books for Kids",34.99 ,"Maple press","https://m.media-amazon.com/images/I/713hLtePeZL._AC_UY327_FMwebp_QL65_.jpg")
otherBooks("Bhagavath Geetha",99.99 ,"Kadimisetty Sujatha","https://m.media-amazon.com/images/I/71ZGznGgRDL._AC_UY327_FMwebp_QL65_.jpg")
otherBooks("Great Indian Business Stories ",99.99 ,"Rathnavathi","https://m.media-amazon.com/images/I/71PM6P5ZEIL._AC_UY327_FMwebp_QL65_.jpg")
otherBooks("Intro of Indian Psychology ",49.99 ,"jagannadham","https://m.media-amazon.com/images/I/71hcei-Qo8L._AC_UY327_FMwebp_QL65_.jpg")
otherBooks("History of Indian Ocean ",72.99 ,"madhavk","https://m.media-amazon.com/images/I/91ATacqTfyL._AC_UY327_FMwebp_QL65_.jpg")
otherBooks("Blue Book on Krishna ",39.99 ,"gowthamk","https://m.media-amazon.com/images/I/81twvwCUUYL._AC_UY327_FMwebp_QL65_.jpg")

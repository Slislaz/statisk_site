const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myProduct = urlParams.get("id");
console.log("the psdjfois", myProduct);

let productId = myProduct;
let productContainer = document.querySelector(".productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  productContainer.innerHTML = `<div class="grid_1-1-1">

           <img class="productImage" src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="">

            <div class="flex">
                <h2>Produkt information</h2>
                <div>
                    <h3>Model name</h3>
                    <p class="productName" >${data.productdisplayname}</p>
                </div>
                <div>
                    <h3>Inventory number</h3>
                    <p>${data.id}</p>
                </div>
             



            </div>

            <div class="flex2">
                <h3>${data.productdisplayname}</h3>
                <h4 class="productCategory">${data.category}</h4>
                <div class="grid_1-1">
                    <p class="productPrice">DKK ${data.price},-</p>
                    <div> Tilføj kurv</div>
                
                </div>
            </div>

        </div>
          
  <div class="udsolgt ${!data.soldout && "udsolgt_fr"} ">
                <P>udsolgt</P>
            </div>
             <div class="rabat ${data.discount && "rabat_fr"} ">
               ${data.discount}%
            </div>
  
    
    
    `;
}

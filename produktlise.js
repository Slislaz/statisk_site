const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myCategory = urlParams.get("id");

console.log("the category is", myCategory);

const productContainer = document.querySelector(".grid_1-1-1-1");
fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `  <div class="box ">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
          
            <h3>${product.productdisplayname}</h3>
          
            <h4>${product.category}</h4>
            <p>DKK ${product.price},-</p>
            <a href="produkt.html?id=${product.id}">Read more</a>
            <div class="rabat ${product.discount && "rabat_fr"} ">
               ${product.discount}%
            </div>
            <div class="udsolgt ${!product.soldout && "udsolgt_fr"} ">
                <P>udsolgt</P>
            </div>
        </div>`
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}

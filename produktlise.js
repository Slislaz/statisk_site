let productContainer = document.querySelector(".grid_1-1-1-1");
fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then(showlist);

function showlist(products) {
  console.log(products);
  const markup = products
    .map(
      (product) =>
        `  <div class="box">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="">
            <h3>${product.productdisplayname}</h3>
            <h4>${product.category}</h4>
            <p>DKK ${product.price},-</p>
            <a href="produkt.html">Read more</a>
             <div class="rabat">
               ${product.discount}
            </div>
            <div class="udsolgt">
                <P>udsolgt</P>
            </div>


        </div>`
    )
    .join("");
  console.log(markup);
  productContainer.innerHTML = markup;
}

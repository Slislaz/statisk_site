console.log("siden vises");

let categoryContainer = document.querySelector(".grid_1-1-1");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((Response) => Response.json())
  .then(showCategory);

function showCategory(data) {
  console.log("mine date er", data);
  const markup = data
    .map(
      (element) => `     

     

       
            <a href="produktliste.html?id=${element.category}">${element.category}</a>

     
`
    )
    .join("");
  console.log("min markup er", markup);
  categoryContainer.innerHTML = markup;
}

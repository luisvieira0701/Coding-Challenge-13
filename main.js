//Task 2- Fetching API and displaying basic product details on the webpage
fetch(www.course-api.com/javascript-store-products)
    .then(response=> {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(products => {
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.title} - $${product.price}`
            productList.appendChild(listItem)
        })
    })
    .catch(error =>{
        console.error('There was a problem with the fetch operation', error)
    })
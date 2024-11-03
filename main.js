const productList = document.getElementById('productList')

//Task 2- Fetching API and displaying basic product details on the webpage
fetch('https://www.course-api.com/javascript-store-products')
    .then(response=> {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response)
        return response.json()
    })
    .then((data)=> {
        console.log(data)
    })
    .then(products =>{
        console.log(products)
        products.forEach(product =>{
            const productFields = product.fields
            const listItem = document.createElement('li')
            listItem.textContent = `${productFields.name} - ${productFields.price}`
            productList.appendChild(listItem) 
        })
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation', error)
    })


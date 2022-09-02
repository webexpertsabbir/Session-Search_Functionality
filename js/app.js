const loadProducts = async() =>{
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    // console.log(data);
    return data;
}

const setAllMenu = async() =>{
    const data = await loadProducts();
    const menu = document.getElementById('products-menu');

    const unicqCatagori = [];
    for(const product of data){
        console.log(product);
        if(unicqCatagori.indexOf(product.category) == -1){
            unicqCatagori.push(product.category);
            const li = document.createElement('li');
            li.innerHTML = `${product.category}`;
            menu.appendChild(li);
        }
    }
}
// loadProducts();
setAllMenu();
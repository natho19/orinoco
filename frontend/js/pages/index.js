// Récupère les produits de l'API
loadConfig().then(data => {
    config = data;
    fetch(config.host + 'api/teddies')
    .then(data => data.json())
    .then(jsonProducts => {
        for (let jsonProduct of jsonProducts) {
            let product = new Product(jsonProduct);
            displayProduct(product);
        }
    })
    .catch(function() {
        alert("Problème de connexion au serveur");
    })
});

// Affiche les produits
function displayProduct(product) {
    document.querySelector('.products').innerHTML += `
    <div class="col-lg-4 col-md-6 col-xs-12 mb-5">
        <div class="card shadow">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <div class="card-title-price">
                    <h2 class="card-title">${product.name}</h2>
                    <h3 class="card-price badge bg-purple">${formatPrice(product.price)} &euro;</h3>
                </div>
                <p class="card-text">${product.description}</p>
                <div class="text-center">
                    <a href="single.html?id=${product._id}" class="btn btn-purple rounded-pill"><i class="bi bi-check-circle"></i> Sélectionner</a>
                </div>
            </div>
        </div>
    </div>`;
}

const API_URL = "http://localhost:3000"; // ⚠️ en local

// Charger Produits
async function chargerProduits() {
  const res = await fetch(`${API_URL}/products`);
  const data = await res.json();
  document.querySelector("#produits").innerHTML = data
    .map(p => `<li>${p.nom} - ${p.prix}€</li>`)
    .join("");
}

// Charger Utilisateurs
async function chargerUtilisateurs() {
  const res = await fetch(`${API_URL}/users`);
  const data = await res.json();
  document.querySelector("#utilisateurs").innerHTML = data
    .map(u => `<li>${u.nom}</li>`)
    .join("");
}

// Charger Commandes
async function chargerCommandes() {
  const res = await fetch(`${API_URL}/orders`);
  const data = await res.json();
  document.querySelector("#commandes").innerHTML = data
    .map(c => `<li>Commande #${c.id} (Utilisateur ${c.userId}, Produit ${c.produitId})</li>`)
    .join("");
}

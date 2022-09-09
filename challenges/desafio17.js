// Retorne a quantidade total de produtos em uma nova coleção chamada resumoProdutos

db.resumoProdutos.insertOne(
  { 
    franquia: "McDonalds",
    totalProdutos: db.produtos.count(),
  },
);

db.resumoProdutos.find(
  {},
  { franquia: 1, totalProdutos: 1, _id: 0 },
);
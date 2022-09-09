// Insira os valores combo e tasty no array tags de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)

db.produtos.updateMany(
  {},
  { 
    $push: { 
      tags: { 
        $each: ["tasty", "combo"], 
        $sort: 1,
      },
    },
  },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);
// Adicione o campo ultimaModificacao com a data corrente somente no sanduíche Big Mac

db.produtos.updateOne(
  { nome: { $eq: "Big Mac" } },
  { $set: { ultimaModificacao: new Date() } },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { nome: 1, _id: 0 },
); 
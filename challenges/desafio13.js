// Inclua o campo criadoPor em todos os documentos, colocando Ronald McDonald no valor desse campo

db.produtos.updateMany(
  {},
  {
    $set: { criadoPor: "Ronald McDonald" },
  },
);

db.produtos.find({}, { nome: 1, criadoPor: 1, _id: 0 });
const receitas = [
  {
    titulo: "Feijoada",
    imagem: "receitasImages/feijoada.jpg",
    preparo:
      "Deixe as carnes salgadas de molho em água por algumas horas para dessalgar. Cozinhe o feijão preto. Em outra panela, refogue alho, cebola e as carnes aos poucos. Junte tudo ao feijão e cozinhe até que tudo esteja macio. Finalize com cheiro-verde ou preferir.",
    ingredientes: [
      "500g Feijão preto",
      "300g Carne-seca",
      "200g Costelinha de porco,",
      "150g Lombo de porco",
      "150g Linguiça calabresa",
      "3 dentes de Alho picados",
      "1 Cebola grande picada",
      "2 Folhas de louro",
      "Sal a gosto",
    ],
  },
  {
    titulo: "Bolo de fubá",
    imagem: "receitasImages/boloFuba.jpg",
    preparo:
      "Misture os ovos a xícara de açúcar uma xícara de leite e meia xícara de óleo. Acrescente a xícara de fubá e uma xícara de farinha de trigo, mexendo bem até ficar homogêneo. Adicione uma colher (sopa) de fermento em pó e misture delicadamente. Despeje a massa em uma forma untada e enfarinhada. Leve ao forno preaquecido a 180°C por cerca de 35 a 40 minutos, ou até dourar.",
    ingredientes: [
      "3 Ovos",
      "1 Xícara de açúcar",
      "1 Xícara de leite",
      "1/2 Xícara de óleo",
      "1 Xícara de fubá",
      "1 Xícara de farinha de trigo",
      "1 Colher (sopa) de fermento",
    ],
  },
  {
    titulo: "Espaguete a bolonhesa",
    imagem: "receitasImages/espagueteBolonhesa.jpg",
    preparo:
      "Cozinhe o macarrão como preferir, escorra e reserve. Em outra panela, refogue a cebola e o alho. Adicione a carne moída e cozinhe até dourar. Acrescente os tomates (ou molho pronto), tempere com sal, e deixe cozinhar por alguns minutos. Misture o molho à massa, finalize com cheiro-verde ou com queijo ralado, se preferir.",
    ingredientes: [
      "250g de macarrão (espaguete ou penne)",
      "2 Colheres (sopa) de oleo",
      "1 Cebola média picada",
      "2 dentes de Alho picados",
      "1 300g de carne moída",
      "3 Tomates maduros picados (ou 1 lata de molho de tomate)",
      "Sal a gosto",
      "Cheiro-verde ou manjericão a gosto",
      "Queijo ralado (opcional)",
    ],
  },
];

function getListaIngredientes(ingredientes) {
  let lista =
    "<ul>" +
    ingredientes.map((ingrediente) => `<li>${ingrediente}</li>`).join("") +
    "</ul>";
  return lista;
}

function getCard(receita) {
  return `
        <div class="card" style="width: 250px">
            <img src="${
              receita.imagem
            }" class="card-img-top" alt="Imagem da receita" />
        <div class="card-body">
            <h5 class="card-title">${receita.titulo}</h5>
            <div class="card-text">
                ${getListaIngredientes(receita.ingredientes)}
                <hr>
                <p>${receita.preparo}</p>
                </div>
            </div>
        </div>`;
}

function preencherCatalogo() {
  const pnlCatalogo = document.getElementById("pnlCatalogo");
  const html = receitas
    .map((receita) => getCard(receita))
    .reduce((acumulado, atual) => acumulado + atual);

  pnlCatalogo.innerHTML = html;
}

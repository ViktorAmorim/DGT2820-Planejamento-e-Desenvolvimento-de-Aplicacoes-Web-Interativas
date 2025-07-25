// swap, shuffle, bubble_sort, selection_sort, quick_sort, particionamento \\

const swap = (vetor, pos1, pos2) => {
  [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

const shuffle = (vetor, trocas) => {
  for (let i = 0; i < vetor.length; i++) {
    let pos1 = Math.floor(Math.random() * vetor.length);
    let pos2 = Math.floor(Math.random() * vetor.length);
    swap(vetor, pos1, pos2);
  }

  return vetor;
};

const bubble_sort = (vetor) => {
  for (let i = 0; i < vetor.length; i++) {
    for (let indice = 0; indice < vetor.length - 1; indice++) {
      if (vetor[indice] > vetor[indice + 1]) {
        let temp = vetor[indice];
        vetor[indice] = vetor[indice + 1];
        vetor[indice + 1] = temp;
      }
    }
  }
  return vetor;
};

const selection_sort = (vetor) => {
  for (let i = 0; i < vetor.length; i++) {
    let menor = i;
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[menor]) menor = j;
    }
    [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
  }
  return vetor;
};

const quick_sort = (vetor, inicio, fim) => {
  if (inicio < fim) {
    const pospivot = particionamento(vetor, inicio, fim);
    quick_sort(vetor, inicio, pospivot - 1);
    quick_sort(vetor, pospivot + 1, fim);
  }

  return vetor;
};

const particionamento = (vetor, inicio, fim) => {
  const pivot = vetor[fim];
  let i = inicio - 1;
  let j = inicio;

  while (j < fim) {
    if (vetor[j] <= pivot) {
      i++;
      [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
    }
    j++;
  }

  [vetor[i + 1], vetor[fim]] = [vetor[fim], vetor[i + 1]];
  return i + 1;
};

// add, ordenar, misturar \\

function add() {
  let valorCampo = document.getElementById("valor").value;
  let lista = document.getElementById("valores");
  let node = document.createElement("li");

  let nodeText = document.createTextNode(valorCampo);
  node.appendChild(nodeText);
  lista.appendChild(node);
}

function ordenar() {
  let listaDeValores = document.getElementById("valores");
  let listaDeMetodos = document.getElementById("metodos");

  let valores = [];
  for (let i = 0; i < listaDeValores.children.length; i++) {
    valores.push(eval(listaDeValores.children[i].innerHTML));
  }

  switch (listaDeMetodos.selectedIndex) {
    case 0:
      valores = bubble_sort(valores);
      console.log("resultado do bubble:, ", valores);
      break;
    case 1:
      valores = selection_sort(valores);
      break;
    case 2:
      valores = quick_sort(valores, 0, valores.length - 1);
      break;
    default:
      alert("Metodo invalido");
  }

  listaDeValores.innerHTML = valores
    .map((valor) => `<li>${valor}</li>`)
    .join("");
  return valores;
}

function misturar() {
  let listaDeValores = document.getElementById("valores");

  let valores = [];
  for (let i = 0; i < listaDeValores.children.length; i++) {
    valores.push(eval(listaDeValores.children[i].innerHTML));
  }

  valores = shuffle(valores);

  listaDeValores.innerHTML = valores
    .map((valor) => `<li>${valor}</li>`)
    .join("");
}

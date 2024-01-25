var array1 = [];
var array2 = [];
function funcao1() {
  var aux = false;
  for (linha of array1) {
    if (linha[1] == document.getElementById("cpf").value) {
      aux = true;
    }
  }
  if (aux == false) {
    array2[0] = document.getElementById("nome").value;
    array2[1] = document.getElementById("cpf").value;
    array2[2] = document.getElementById("endereco").value;
    array2[3] = document.getElementById("i-date").value;
    array1.push(array2);
    array2 = [];
  } else {
    window.alert("conta ja existente");
  }
}

function funcao2() {
  var str = [];

  for (linha of array1) {
    str.push("Nome: ");
    str.push(linha[0]);
    str.push("<br>");
    str.push("CPF: ");
    str.push(linha[1]);
    str.push("<br>");
    str.push("Edereço: ");
    str.push(linha[2]);
    str.push("<br>");
    str.push("DataNasc: ");
    str.push(linha[3]);
    str.push("<br>");
    str.push("<br>");
    str.push("<br>");
  }
  document.getElementById("dv").innerHTML = str.join(" ");
}

function funcao3() {
  var aux = false;
  var cont = -1;
  var str = [];
  for (linha of array1) {
    cont = cont + 1;
    if (linha[1] == document.getElementById("busca").value) {
      aux = true;
      str.push("Nome: ");
      str.push(linha[0]);
      str.push("<br>");
      str.push("CPF: ");
      str.push(linha[1]);
      str.push("<br>");
      str.push("Edereço: ");
      str.push(linha[2]);
      str.push("<br>");
      str.push("DataNasc: ");
      str.push(linha[3]);
      str.push("<br>");
      str.push("<br>");
      str.push("<br>");
    }
  }
  if ((aux = true)) {
    document.getElementById("dv1").innerHTML = str.join(" ");
  } else {
    window.alert("conta não existente");
  }
}

function funcao4() {
  var cont = -1;
  for (linha of array1) {
    cont = cont + 1;
    if (linha[1] == document.getElementById("deleta").value) {
      delete array1[cont];
    }
  }
}

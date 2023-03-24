//Função para calcular a gorjeta
function calculateTip(event){
  event.preventDefault();//para não recarregar página
  
  //pegar os valores que são preenchidos
  let bill = document.getElementById('bill').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let numOfPeople = document.getElementById('people').value;

  //verifica seconta foi prrenchida ou esta vazia
  if(bill == '' | serviceQual == 0){
    alert("Por favor preencha os valores")
    return;
  }

  //verifica o número de pessoas que a gorjeta vai ser dividida
  if(numofPeople = "" | numOfPeople <= 1){
    numOfPeople = 1;
    document.getElementById('each').style.display = "none"
    }else{
        document.getElementById('each').style.display = "block"
    }

    //realização da conta; tofixed, fixa em 2 casas decimais 
    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

    //Para que a frase "Gorjeta total R$ cada" não apareça antes
    document.getElementById('totalTip').style.display = "none";
    document.getElementById('each').style.display = "none";

    //Evento de submit do form
    document.getElementById('tipsForm').addEventListener('submit',calculateTip);


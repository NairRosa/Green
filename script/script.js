
// Determinar o posto de coleta com base no primeiro dígito
let estado;
let exibirEndereco;
let endereco;

function verificarNumero() {
    //Pegar valor do input
    var valorCep = document.getElementById("inputCep").value;
    // Verificar se o valor foi digitado
    if (valorCep.length === 8) {
        // Obter o primeiro dígito do CEP
        let primeiroDigito = parseInt(valorCep.charAt(0), 10);

        if (primeiroDigito === 9) {
            let enderecoNove = "DMLU – Conceição: Rua Alberto Bins, próximo ao nº 650 (embaixo do Viaduto da Conceição) - Bairro CentroFuncionamento: segunda-feira à sexta-feira: 8h - 18h; sábado: 8h - 12h";
            endereco = document.getElementById("endereco");
            exibirEndereco = (document.querySelector("#endereco").innerHTML = "O posto de coleta E-lixo para o CEP - " + valorCep +  " é: " + enderecoNove);

        } else if (primeiroDigito === 0) {
            let enderecoZero = "Parque Trianon – Rua Peixoto Gomide, 949\nParque Prefeito Mario Covas – Avenida Paulista, 185";
            endereco = document.getElementById("endereco");
            exibirEndereco = (document.querySelector("#endereco").innerHTML = "O posto de coleta E-lixo para o CEP - " + valorCep +  " é: " + enderecoZero);

            //alert("Parque Trianon – Rua Peixoto Gomide, 949\nParque Prefeito Mario Covas – Avenida Paulista, 185 ")
        } else if (primeiroDigito === 4) {
            let enderecoQuatro = "Fábrica Cultural Rua Rosalvo Barbosa, ao lado da Igreja São Jorge, na Vila Ruy Barbosa, na Cidade Baixa";
            endereco = document.getElementById("endereco");
            exibirEndereco = (document.querySelector("#endereco").innerHTML = "O posto de coleta E-lixo para o CEP - " + valorCep +  " é: " + enderecoQuatro);

            //alert(" Fábrica Cultural Rua Rosalvo Barbosa, ao lado da Igreja São Jorge, na Vila Ruy Barbosa, na Cidade Baixa ")
        } else {
            estado = "Outro estado";
        }
    }
}
//var endereco = document.getElementById("endereco");
//var exibirEndereco = (document.querySelector("#endereco").innerHTML = "Posto de coleta E-lixo para " + valorCep.value + " é: " + verificarNumero());

function simularCompra() {
    // Definição dos valores exatos dos suplementos exibidos na página
    const PRECO_WHEY = 130.00;
    const PRECO_CREATINA = 85.00;
    const PRECO_BCAA = 55.00;

    // 1. Perguntar as quantidades com prompt e 2. Converter com Number
    let qtdWhey = Number(prompt("Quantos potes de 100% Whey Protein (R$ 130,00) você deseja?"));
    let qtdCreatina = Number(prompt("Quantos potes de Creatina Monohidratada (R$ 85,00) você deseja?"));
    let qtdBcaa = Number(prompt("Quantos potes de BCAA Amino Powder (R$ 55,00) você deseja?"));

    // Tratamento de inputs inválidos (NaN) ou menores que zero
    if (isNaN(qtdWhey) || qtdWhey < 0) qtdWhey = 0;
    if (isNaN(qtdCreatina) || qtdCreatina < 0) qtdCreatina = 0;
    if (isNaN(qtdBcaa) || qtdBcaa < 0) qtdBcaa = 0;

    // Verificação de carrinho vazio (Regra do Edital)
    if (qtdWhey === 0 && qtdCreatina === 0 && qtdBcaa === 0) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    // 3. Calcular os valores: preço x quantidade
    let totalWhey = qtdWhey * PRECO_WHEY;
    let totalCreatina = qtdCreatina * PRECO_CREATINA;
    let totalBcaa = qtdBcaa * PRECO_BCAA;
    let totalGeral = totalWhey + totalCreatina + totalBcaa;

    // 4. Exibir o recibo final formatado com alert()
    let recibo = "======= NUTRISTORE RECIBO =======\n\n";
    if (qtdWhey > 0) recibo += ` Whey Protein: ${qtdWhey}x = R$ ${totalWhey.toFixed(2)}\n`;
    if (qtdCreatina > 0) recibo += ` Creatina: ${qtdCreatina}x = R$ ${totalCreatina.toFixed(2)}\n`;
    if (qtdBcaa > 0) recibo += ` BCAA Powder: ${qtdBcaa}x = R$ ${totalBcaa.toFixed(2)}\n`;
    
    recibo += `\n---------------------------------\n`;
    recibo += `TOTAL DA COMPRA: R$ ${totalGeral.toFixed(2)}\n`;
    recibo += "=================================";

    alert(recibo);
}

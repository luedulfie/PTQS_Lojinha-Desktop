﻿function submeterNovoProdutoComErro(nome, valor, cores){
  //Preenchendo o formulário de novo produto
  let formularioNovoProduto = Aliases.Lojinha.frmPrincipal.CorpoLojinha.FormularioAdicaoProduto.PainelFormularioDireito;
  formularioNovoProduto.edtNovoNomeProduto.SetText(nome);
  formularioNovoProduto.edtNovoValorProduto.SetText(valor);
  formularioNovoProduto.edtNovoCoresProduto.SetText(cores);
  
  //Pressionando o botão de adição
  formularioNovoProduto.btnSalvarProduto.Click();
}

module.exports.submeterNovoProdutoComErro = submeterNovoProdutoComErro;
var LoginTela = require("LoginTela");
var ListaProdutosTela = require("ListaProdutosTela");
var NovoProdutoTela = require("NovoProdutoTela");
var MensagemTela = require("MensagemTela");
var FormularioPrincipalTela = require("FormularioPrincipalTela");

function testValidarValorZeroDoProduto()
{
  LoginTela.abrirLojinha();
  LoginTela.login("admin", "admin");
  ListaProdutosTela.abrirNovoProduto();
  NovoProdutoTela.submeterNovoProdutoComErro("Macbook", "000", "preto, vermelho");
  MensagemTela.validarMensagemDeErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  MensagemTela.fecharMensagemDeErro();
  FormularioPrincipalTela.fecharLojinha();
}

function testValidarValorSeteMilEUmCentavoDoProduto()
{
  LoginTela.abrirLojinha();
  LoginTela.login("admin", "admin");
  ListaProdutosTela.abrirNovoProduto();
  NovoProdutoTela.submeterNovoProdutoComErro("Macbook", "700001", "preto, vermelho");
  MensagemTela.validarMensagemDeErro("O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00.");
  MensagemTela.fecharMensagemDeErro();
  FormularioPrincipalTela.fecharLojinha();
}
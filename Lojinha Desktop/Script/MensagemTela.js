function validarMensagemDeErro(mensagem) {
  //Validando mensagem de erro
  aqObject.CheckProperty(Aliases.Lojinha.dlgLojinha.Static, "WndCaption", cmpEqual, mensagem);
}

function fecharMensagemDeErro() {
  //Selecionando botão ok do dialog
  Aliases.Lojinha.dlgLojinha.btnOK.Click();
}

module.exports.validarMensagemDeErro = validarMensagemDeErro;
module.exports.fecharMensagemDeErro = fecharMensagemDeErro;
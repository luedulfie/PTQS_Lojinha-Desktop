﻿function abrirLojinha() {
  //Executando o App da Lojinha
  TestedApps.Lojinha.Run();
}

function login(usuario, senha) {
  //Clicando na Aba de Login
  Aliases.Lojinha.frmPrincipal.CorpoLojinha.ClickTab("LOGIN");
  
  //Preenchendo o formulário de Login
  let formularioLogin = Aliases.Lojinha.frmPrincipal.CorpoLojinha.FormularioLogin;
  formularioLogin.edtUsuario.SetText(usuario);
  formularioLogin.edtSenha.SetText(senha);
  formularioLogin.btnEntrar.Click();
}

module.exports.abrirLojinha = abrirLojinha;
module.exports.login = login;
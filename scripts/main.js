let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/my-photo.png') {
      minhaImagem.setAttribute ('src','images/my-photo2.png');
    } else {
      minhaImagem.setAttribute ('src','images/my-photo.png');
    }
}

/*

Pede ao usuário para que ele entre com um nome, em seguida, adiciona a mensagem "Espero que você
esteja bem" seguida do nome inserido.

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Espero que você esteja bem, ' + meuNome + '!';
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Espero que você esteja bem, ' + nomeGuardado + '!';
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }

  function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Espero que você esteja bem, ' + meuNome + '!';
    }
  }

  */
var listaJogadores = [
    {
      nome: "Jorge",
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    }
  ];
  
  exibirNaTela();
  
  function adicionarJogador() {
    let novoJogador = document.getElementById("player").value;
  
    if (novoJogador.length === 0) {
      alert("Coloque o nome do jogador para adiciona-lo!");
      return;
    }
  
    listaJogadores[listaJogadores.length] = {
      nome: novoJogador,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
  
    exibirNaTela();
  }
  
  function exibirNaTela(jogador) {
    const tabela = document.getElementById("tabelaJogadores");
    tabela.innerHTML = "";
    listaJogadores.forEach((jogador) => {
      tabela.innerHTML += `
    <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitorias}</td>
            <td>${jogador.empates}</td>
            <td>${jogador.derrotas}</td>
            <td>${jogador.pontos}</td>
            <td><button onclick="adicionarVitoria('${jogador.nome}')">Vitória</button></td>
            <td><button onclick="adicionarEmpate(${jogador.empate})">Empate</button></td>
            <td><button onclick="adicionarDerrota('${jogador.nome}')">Derrota</button></td>
          </tr>
    `;
    });
  }
  
  function adicionarVitoria(nome) {
    listaJogadores.forEach((jogador) => {
      if (jogador.nome != nome) {
        jogador.vitorias;
      } else {
        jogador.vitorias++;
        jogador.pontos = jogador.pontos + 3;
      }
    });
    exibirNaTela();
  }
  
  function adicionarEmpate(nome) {
    listaJogadores.forEach((jogador) => {
      jogador.empates++;
      jogador.pontos++;
    });
    exibirNaTela();
  }
  
  function adicionarDerrota(nome) {
    listaJogadores.forEach((jogador) => {
      if (jogador.nome != nome) {
        jogador.derrotas;
      } else {
        jogador.derrotas++;
      }
    });
    exibirNaTela();
  }
  
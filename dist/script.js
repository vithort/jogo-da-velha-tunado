window.onload = () => {
  new JogoVelha();
};

class JogoVelha {
  constructor() {
    this.iniciaElementos();
    this.iniciaEstado();
  }

  iniciaElementos() {
    this.jogadorX = document.querySelector('#jogador-x');
    this.jogadorO = document.querySelector('#jogador-o');
    this.salvarLocal = document.querySelector('#salva-local');
    this.salvarLocal.addEventListener('click', this.salvaLocal.bind(this));
    this.carregarLocal = document.querySelector('#carrega-local');
    this.carregarLocal.addEventListener('click', this.carregaLocal.bind(this));
    this.limparLocal = document.querySelector('#limpar');
    this.limparLocal.addEventListener('click', this.limpaLocal.bind(this));
    this.velha = document.querySelector('#velha');
    this.velha.addEventListener('click', (event) => {
      this.realizaJogada(event);
      this.render();
    });
  }

  iniciaEstado() {
    this.turno = true;
    this.jogadas = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.fim = false;
    this.vitoria = [448, 56, 7, 292, 146, 73, 273, 84];
  }

  salvaLocal() {
    const dados = {
      jogadorX: this.jogadorX.value,
      jogadorO: this.jogadorO.value,
      jogadas: this.jogadas,
    };
    localStorage.setItem('jogo', JSON.stringify(dados));
  }

  carregaLocal() {
    const dados = JSON.parse(localStorage.getItem('jogo'));
    this.jogadorX.value = dados.jogadorX;
    this.jogadorO.value = dados.jogadorO;
    this.jogadas = dados.jogadas;
    this.render();
  }

  limpaLocal() {
    localStorage.removeItem('jogo');
    this.jogadorX.value = '';
    this.jogadorO.value = '';
    this.iniciaEstado();
    this.render();
  }

  realizaJogada(event) {
    const id = event.target.dataset.id;
    if (this.fim) {
      this.modal('Partida terminada!');
      return;
    }
    if (!event.target.dataset.id) {
      this.modal('Você precisa clicar em uma casa!');
      return;
    }
    if (this.jogadas[id] != 0) {
      this.modal('Esta posição já foi escolhida!');
      return;
    }

    this.jogadas[id] = this.turno ? 'X' : 'O';
    this.turno = !this.turno;
  }

  render() {
    const resultado = this.verificaVitoria();
    if (resultado == 'X' || resultado == 'O') {
      this.fim = true;
      this.modal(`O Jogador ${resultado} venceu!`);
    }
    const velhaElemento = document.querySelectorAll('[data-id]');
    for (let i = 0; i < 9; i++) {
      velhaElemento[i].innerHTML = this.jogadas[i] == 0 ? '' : this.jogadas[i];
    }
  }

  verificaVitoria() {
    const valorX = parseInt(
      this.jogadas.map((value) => (value == 'X' ? 1 : 0)).join(''),
      2
    );
    const valorO = parseInt(
      this.jogadas.map((value) => (value == 'O' ? 1 : 0)).join(''),
      2
    );
    for (const element of this.vitoria) {
      if ((element & valorX) == element) {
        return 'X';
      }
      if ((element & valorO) == element) {
        return 'O';
      }
    }
    return '';
  }

  modal(texto) {
    const modais = document.querySelector('#modais');
    const modal = document.createElement('div');
    modal.innerHTML = texto;
    modal.classList.add('modalClass');
    modais.appendChild(modal);
    setTimeout(() => {
      modal.classList.add('remover');
      setTimeout(() => {
        modais.removeChild(modal);
      }, 1000);
    }, 2000);
  }
}

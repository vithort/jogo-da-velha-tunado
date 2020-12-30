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
    this.velha = document.querySelector('#velha');
    this.velha.addEventListener('click', (event) => {
      this.realizaJogada(event);
      this.render();
    });
  }

  iniciaEstado() {
    this.turno = true;
    this.jogadas = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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

  realizaJogada(event) {
    const id = event.target.dataset.id;
    // event.target.innerHTML = this.turno ? 'X' : 'O';
    this.jogadas[id] = this.turno ? 'X' : 'O';
    this.turno = !this.turno;
  }

  render() {
    const velhaElemento = document.querySelectorAll('[data-id]');
    for (let i = 0; i < 9; i++) {
      velhaElemento[i].innerHTML = this.jogadas[i] == 0 ? '' : this.jogadas[i];
    }
  }
}

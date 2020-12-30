window.onload = () => {
  new JogoVelha();
};

class JogoVelha {
  constructor() {
    this.iniciaElementos();
    this.turno = true;
  }

  iniciaElementos() {
    this.velha = document.querySelector('#velha');
    this.velha.addEventListener('click', this.realizaJogada.bind(this));
  }

  realizaJogada(event) {
    event.target.innerHTML = this.turno ? 'X' : 'O';
    this.turno = !this.turno;
  }

  render() {
    
  }
}

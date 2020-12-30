window.onload = () => {
  new JogoVelha();
};

class JogoVelha {
  construtor() {
    this.iniciaElementos();
  }

  iniciaElementos() {
    this.velha = document.querySelector('#id');
    this.velha.addEventListener('click', this.realizaJogada);
  }

  realizaJogada() {
    
  }
}

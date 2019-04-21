import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { arrCasa: [0, 0, 0, 0, 0, 0, 0, 0, 0], jogada: 9, aux: true, value: 'R E I N I C I A R'};
    // this.setState({arrCasa: [0,0,0,0,0,0,0,0,0]});
    console.log(this.state);
  }



  componentDidMount() {
    this.updateCanvas(this.returnContext());
    this.posicao(this.returnContext());
  }

  returnContext() {
    const ctx = this.refs.canvas.getContext('2d');
    return ctx;
  }

  verificaGanhador() {
    debugger;
    setTimeout(() => {
      if (this.state.arrCasa[0] === -1 && this.state.arrCasa[1] === -1 && this.state.arrCasa[2] === -1) {
        alert('Parabéns X, você é demais!');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[0] === -1 && this.state.arrCasa[3] === -1 && this.state.arrCasa[6] === -1) {
        alert('Parabéns X, você é demais!');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[0] === -1 && this.state.arrCasa[4] === -1 && this.state.arrCasa[8] === -1) {
        alert('Parabéns X, você é demais!');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[3] === -1 && this.state.arrCasa[4] === -1 && this.state.arrCasa[5] === -1) {
        alert('Parabéns X, você é demais!');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[6] === -1 && this.state.arrCasa[7] === -1 && this.state.arrCasa[8] === -1) {
        alert('Parabéns X, você é demais!');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[1] === -1 && this.state.arrCasa[4] === -1 && this.state.arrCasa[7] === -1) {
        alert('Parabéns X, você é demais!');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[2] === -1 && this.state.arrCasa[5] === -1 && this.state.arrCasa[8] === -1) {
        alert('Parabéns X, você é demais!');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[2] === -1 && this.state.arrCasa[4] === -1 && this.state.arrCasa[6] === -1) {
        alert('Parabéns X, você é demais!');
        this.setState({ aux: false });
        return;
      }
    }, 20);

    setTimeout(() => {
      if (this.state.arrCasa[0] === 1 && this.state.arrCasa[1] === 1 && this.state.arrCasa[2] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[0] === 1 && this.state.arrCasa[3] === 1 && this.state.arrCasa[6] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[0] === 1 && this.state.arrCasa[4] === 1 && this.state.arrCasa[8] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[3] === 1 && this.state.arrCasa[4] === 1 && this.state.arrCasa[5] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[6] === 1 && this.state.arrCasa[7] === 1 && this.state.arrCasa[8] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[1] === 1 && this.state.arrCasa[4] === 1 && this.state.arrCasa[7] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[2] === 1 && this.state.arrCasa[5] === 1 && this.state.arrCasa[8] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.setState({ aux: false });
        return;
      } else if (this.state.arrCasa[2] === 1 && this.state.arrCasa[4] === 1 && this.state.arrCasa[6] === 1) {
        alert('Parabéns amigo Bola, você ganhou');
        this.setState({ aux: false });
        return;
      }
    }, 20);


    setTimeout(() => {
      if (this.state.jogada === 0 && this.state.aux === true) {
        alert('empatou');
        this.setState({ aux: false });
      }

    }, 30);
  }
  updateCanvas(ctx) {

    ctx.fillStyle = 'lightgray';
    ctx.fillRect(0, 0, 450, 450);
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 450);
    ctx.stroke();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 450);
    ctx.stroke();
    ctx.moveTo(0, 150);
    ctx.lineTo(450, 150);
    ctx.stroke();
    ctx.moveTo(0, 300);
    ctx.lineTo(450, 300);
    ctx.stroke();

  }
  posicao(evento) {
    var tela = document.querySelector('canvas');
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    var clone = this.state.arrCasa.slice(0);
    if (this.state.aux === true) {
      if (x > 0 && x < 150 && y > 0 && y < 150 && this.state.arrCasa[0] === 0) {
        x = 75;
        y = 75;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[0] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0){
          clone[0] = -1;
          this.setState({ arrCasa: clone });
        }
      }
      if (x > 0 && x < 150 && y > 150 && y < 300 && this.state.arrCasa[1] === 0) {
        x = 75;
        y = 225;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[1] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0){
          clone[1] = -1;
          this.setState({ arrCasa: clone });
        }
      }
      if (x > 0 && x < 150 && y > 300 && y < 450 && this.state.arrCasa[2] === 0) {
        x = 75;
        y = 375;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[2] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0){
          clone[2] = -1;
          this.setState({ arrCasa: clone });
        }
      }
      if (x > 150 && x < 300 && y > 0 && y < 150 && this.state.arrCasa[3] === 0) {
        x = 225;
        y = 75;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[3] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0){
          clone[3] = -1;
          this.setState({ arrCasa: clone });
        }
      }
      if (x > 150 && x < 300 && y > 150 && y < 300 && this.state.arrCasa[4] === 0) {
        x = 225;
        y = 225;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[4] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0){
          clone[4] = -1;
          this.setState({ arrCasa: clone });
        }
      }
      if (x > 150 && x < 300 && y > 300 && y < 450 && this.state.arrCasa[5] === 0) {
        x = 225;
        y = 375;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[5] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0){
          clone[5] = -1;
          this.setState({ arrCasa: clone });
        }
      }
      if (x > 300 && x < 450 && y > 0 && y < 150 && this.state.arrCasa[6] === 0) {
        x = 375;
        y = 75;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[6] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0){
          clone[6] = -1;
          this.setState({ arrCasa: clone });
        }
      }
      if (x > 300 && x < 450 && y > 150 && y < 300 && this.state.arrCasa[7] === 0) {
        x = 375;
        y = 225;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[7] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0){
          clone[7] = -1;
          this.setState({ arrCasa: clone });
        }
      }
      if (x > 300 && x < 450 && y > 300 && y < 450 && this.state.arrCasa[8] === 0) {
        x = 375;
        y = 375;
        this.desenha(this.returnContext(), x, y);
        this.verificaGanhador();
        if (this.state.jogada % 2 === 1) {
          clone[8] = 1;
          this.setState({ arrCasa: clone });
        } else if(this.state.jogada % 2 === 0) {
          clone[8] = -1;
          this.setState({ arrCasa: clone });
        }
      }
    } else {
      alert('Jogo finalizado. Favor reiniciar o jogo');
    }
  }
  desenha(ctx, x, y) {
    if (this.state.jogada % 2 === 1 && this.state.jogada > 0) {
      ctx.strokeStyle = 'red';
      ctx.beginPath();
      ctx.arc(x, y, 70, 0, 2 * 3.14);
      ctx.stroke();
      this.setState({ jogada: this.state.jogada - 1 });
    } else if (this.state.jogada % 2 === 0 && this.state.jogada > 0) {
      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      ctx.moveTo(x - 60, y - 60);
      ctx.lineTo(x + 60, y + 60);
      ctx.moveTo(x + 60, y - 60);
      ctx.lineTo(x - 60, y + 60);
      ctx.stroke();
      this.setState({ jogada: this.state.jogada - 1 });
    }
  }

  render() {
    return (        
      <canvas ref="canvas" width={450} height={450} onClick={(e) => this.posicao(e, this.returnContext())} />
      );
  }
}
//ReactDOM.render(<App/>, document.getElementById('container'));
export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { jogada: 9 };
    this.state = { arrCasa: [0, 0, 0, 0, 0, 0, 0, 0, 0] };
  }

  componentDidMount() {
    this.updateCanvas(this.returnContext());
    this.posicao(this.returnContext());
  }

  returnContext() {
    const ctx = this.refs.canvas.getContext('2d');
    return ctx;
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
    if (x > 0 && x < 150 && y > 0 && y < 150 && this.state.arrCasa[0] === 0) {
      x = 75;
      y = 75;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.setState({arrCasa: this.state.arrCasa[0] = 1});
      } else {
        this.setState({arrCasa: this.state.arrCasa[0] = -1});
      }
    }
    if (x > 0 && x < 150 && y > 150 && y < 300 && this.state.arrCasa[1] === 0) {
      x = 75;
      y = 225;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.state.arrCasa[1] = 1;
      } else {
        this.state.arrCasa[1] = -1;
      }
    }
    if (x > 0 && x < 150 && y > 300 && y < 450 && this.state.arrCasa[2] === 0) {
      x = 75;
      y = 375;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.state.arrCasa[2] = 1;
      } else {
        this.state.arrCasa[2] = -1;
      }
    }
    if (x > 150 && x < 300 && y > 0 && y < 150 && this.state.arrCasa[3] === 0) {
      x = 225;
      y = 75;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.state.arrCasa[3] = 1;
      } else {
        this.state.arrCasa[3] = -1;
      }
    }
    if (x > 150 && x < 300 && y > 150 && y < 300 && this.state.arrCasa[4] === 0) {
      x = 225;
      y = 225;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.state.arrCasa[4] = 1;
      } else {
        this.state.arrCasa[4] = -1;
      }
    }
    if (x > 150 && x < 300 && y > 300 && y < 450 && this.state.arrCasa[5] === 0) {
      x = 225;
      y = 375;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.state.arrCasa[5] = 1;
      } else {
        this.state.arrCasa[5] = -1;
      }
    }
    if (x > 300 && x < 450 && y > 0 && y < 150 && this.state.arrCasa[6] === 0) {
      x = 375;
      y = 75;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.state.arrCasa[6] = 1;
      } else {
        this.state.arrCasa[6] = -1;
      }
    }
    if (x > 300 && x < 450 && y > 150 && y < 300 && this.state.arrCasa[7] === 0) {
      x = 375;
      y = 225;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.state.arrCasa[7] = 1;
      } else {
        this.state.arrCasa[7] = -1;
      }
    }
    if (x > 300 && x < 450 && y > 300 && y < 450 && this.state.arrCasa[8] === 0) {
      x = 375;
      y = 375;
      this.desenha(this.returnContext(), x, y);
      if (this.jogada % 2 === 1) {
        this.state.arrCasa[8] = 1;
      } else {
        this.state.arrCasa[8] = -1;
      }
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
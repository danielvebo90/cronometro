import React from 'react';
import './App.css';
import Add from './components/Add';
import Timer from './components/Timer'
import Update from './components/Update';
import store from './store';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      timers: [{id: 0, title: 'Estudiar Make It Real', project: 'MIR', timerTime: 0, updateInfo: false }],
      isAddTimerActive: false,
    }

    store.subscribe(() => {
      this.setState({
        timers: store.getState().timers
      })
    });
  }

  render() {
    return (
      <div>
        <div className='header'>Timers</div>
        {this.state.timers.map((t) => {
          return (!t.updateInfo ?
            <div className='frame' key={t.id}>
              <div className='title'>{t.title}</div>
              <span className= "subtitle">{t.project}</span>
              <Timer timer={t} key={t.id} />
            </div> :
            <div className='frame' key={t.id}>
              < Update values={t}  />
            </div>
          )
        }
        )}
        {this.state.isAddTimerActive && (
          <div className='frame'>
            < Add onToggleAddTimer={this.onToggleAddTimer} />
          </div>
        )}
        {!this.state.isAddTimerActive && (
          <div className="d-flex justify-content-center">
            <Button variant={"light"} size="lg" onClick={this.onToggleAddTimer} >+</Button>
          </div>
        )}
      </div>
    );
  }

  onToggleAddTimer = () => {
    this.setState((state) => ({
      isAddTimerActive: !state.isAddTimerActive
    }));
  }
}

export default App;

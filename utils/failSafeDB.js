class FailSafeDB {
  constructor(db) {
    this.queue = [];
    this.db = db;
    this.currentState = null;
    this.states = {
      connect: new ConnectedState(this),
      disconnect: new DisconnectedState(this)
    };
  }

  changeState(state) {
    this.currentState = this.states[state];
    this.currentState.activate();
  }

  send(data) {
    this.currentState.send(data);
  }
}

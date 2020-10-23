import React from 'react'
// import {main} from '../dai-js/CreateNewVault'
import {fn} from '../dai-js/testFn';


class App extends React.Component {
  state = { id: null, debtvalue: null };


  onSaveButtonClick() {
    const dai_obj = fn();
    this.setState({ id: dai_obj })
    console.log(this.state.id);

  }

  render() {
    if (!this.state.id) {
      return (
        <div>
          <div className="container-fluid bg-dark">
            <div className="text-center text-white display-4 font-weight-bold">
              Lending - Borrowing Platform
            </div>
          </div>
          <div className="bg-muted">
            <div className="container-fluid ">
              <div className="row ">
                <div className="col-md-6 text-right">
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-lg"
                    onClick={this.onSaveButtonClick}
                  >
                    Save
                  </button>
                </div>
                <div className="col-md-6 text-left">
                  <button type="button" className="btn btn-outline-dark btn-lg">
                    Borrow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
      return (
        <div>
          <div className="container-fluid bg-dark">
            <div className="text-center text-white display-4 font-weight-bold">
              Lending - Borrowing Platform
            </div>
          </div>
          <div className="bg-muted">
            <div className="container-fluid ">
              <div className="row ">
                <div className="col-md-6 text-right">
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-lg"
                    onClick={this.onSaveButtonClick}
                  >
                    Save
                  </button>
                  <div>
                    Vault id is = {this.props.id}
                    {/* Vault debt is = {this.props.d_vaultdebt} */}
                  </div>
                </div>
                <div className="col-md-6 text-left">
                  <button type="button" className="btn btn-outline-dark btn-lg">
                    Borrow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    
  }
}

export default App

import React from 'react';

const initialGlobalState = {
  todos: [],
};

// Create a Context for the (global) State
const GlobalState = React.createContext();

class Global extends React.Component {
  constructor(props) {
    super(props);

	// Set the initial (global) State
    this.state = {
      globals: initialGlobalState,
    };
  }

  // Expose the setGlobals function to the Globals object
  componentDidMount() {
    GlobalState.set = this.setGlobalState;
  }

  setGlobalState = (data = {}) => {
    const { globals } = this.state;

    // Loop over the data items by key, only updating those which have changed
    Object.keys(data).forEach((key) => {
      globals[key] = data[key];
    });

    // Update the state with the new State
    this.setState({globals});
  };

  render() {
    const { globals } = this.state;

    return (
      // Pass the current value of GlobalState, based on this components' State, down
    <GlobalState.Provider 
        value={{...globals, setGlobalState: this.setGlobalState }}
    >
        {this.props.children}
    </GlobalState.Provider>
    );
  }
}

export {Global};

// Create a shorthand Hook for using the GlobalState
export const useGlobalState = () => React.useContext(GlobalState);
import React from 'react'

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default App

import React from 'react'

class ClassComponent extends React.Component {
    state= {
        name: 'Mundo'
    }

    render() {
        return  <div>
            <p>name: {this.state.name}</p>
            <button onClick={() =>
                this.setState({name: 'Pessoa'})
            }>CLique aqui!</button>
        </div>
    }
}

export default ClassComponent
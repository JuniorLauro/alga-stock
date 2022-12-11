import React from 'react'

class ClassComponent extends React.Component {
    constructor(props: any){
        super(props)
        console.log('constructor reached')
    }
    
    state= {
        name: 'Mundo'
    }

    componentDidMount() {
        console.log('did mount reached')
    }

    componentDidUpdate() {
        console.log('did update reached')
    }

    render() {
        console.log('render reached')
        return  <div>
            <p>name: {this.state.name}</p>
            <button onClick={() =>
                this.setState({name: 'Pessoa'})
            }>Clique aqui!</button>
        </div>
    }
}

export default ClassComponent
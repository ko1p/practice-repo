import React, { Component } from 'react'

interface IState {
    quote: null | string
    error: null | string
}

export class Quotes extends Component {
    state: IState = {
        quote: null,
        error: null
    }

    componentDidMount() {
        fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(res => {
                this.setState(prev => {
                    return {
                        ...prev,
                        quote: res.quote
                    }
                })
            })
    }

    render() {
        return (
            <span>{this.state.quote}</span>
        )
    }
}

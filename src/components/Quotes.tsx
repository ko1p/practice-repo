import React, { Component } from 'react'

interface IQuotesProps {
    quote: string
}

interface IQuotesState {
}

export class Quotes extends Component<IQuotesProps, IQuotesState> {
    constructor(props: IQuotesProps) {
        super(props)
    }

    render() {
        return (
            <span>{this.props.quote}</span>
        )
    }
}

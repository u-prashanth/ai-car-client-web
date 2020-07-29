import React from 'react'

interface IProps {  }

interface IState
{
    title: string
}


class Index extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props)
    }

    render()
    {
        return (
            <div>
                90° Project
            </div>
        )
    }
}

export default Index
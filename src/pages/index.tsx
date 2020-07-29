import React from 'react'
import Styled from 'styled-components'
import SocketIO from '../config/socket'



// Styles
const Wrapper = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const CameraFeedWrapper = Styled.div`
    wiidth: 100%;
    max-width: 64rem;
    height: 48rem;
    overflow: hidden;

    display: inline-block;
    margin: 0 auto;
`


const CameraFeed = Styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`


interface IProps {  }

interface IState
{
    cameraFeedSrc: string
}


class Index extends React.Component<IProps, IState>
{
    socket: SocketIOClient.Socket

    constructor(props: IProps)
    {
        super(props)

        this.state = {
            cameraFeedSrc: 'https://www.raspberrypi.org/app/uploads/2011/10/Raspi-PGB001.png'
        }
    }

    componentDidMount()
    {
        this.socket = SocketIO

        this.socket.on('connect', data => {
            console.log('Hello connected', data)
        })

        this.socket.on('joined', data => {
            console.log('new member joined')
        })

        this.socket.on('cameraFeed', data => {
            console.log('camera feed: ', `data:image/jpeg;base64,${data.cameraFeed}`)
            this.setState({ cameraFeedSrc: `data:image/jpeg;base64,${data.cameraFeed}` })
        })
    }

    componentWillUnmount()
    {
        SocketIO.close()
        SocketIO.disconnect()
    }

    render()
    {
        return (
            <Wrapper>
                <CameraFeedWrapper>
                    <CameraFeed src={this.state.cameraFeedSrc}/>
                </CameraFeedWrapper>
            </Wrapper>
        )
    }
}

export default Index
import io from 'socket.io-client'

const SocketIO: SocketIOClient.Socket = io('http://localhost:4500')

export default SocketIO
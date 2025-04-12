import AppBar from '~/components/AppBar'
import BoardBar from './BoardBar'
import Footer from '~/components/Footer'

function Board({ backgroundColor, setBackgroundColor }) {
  setBackgroundColor('#fffcec')
  return (
    <>
      <AppBar />
      <BoardBar />
      <Footer />
    </>
  )
}

export default Board

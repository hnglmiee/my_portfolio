import AppBar from '~/components/AppBar'
import CatalogContent from './CatalogContent'
import Footer from '~/components/Footer'

function Catalog({ backgroundColor, setBackgroundColor }) {
  setBackgroundColor('primary.main')
  return (
    <>
      <AppBar />
      <CatalogContent />
      <Footer />
    </>
  )
}

export default Catalog

import { Box } from '@mui/material'
import heroImg from '~/assets/images/LamieeCatalog.png'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { CATALOG_MOCK_DATAS } from '~/contants'

function CatalogContent() {
  return (
    <Box sx={{
      // bgcolor: '#000'
    }}>

      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

      }}>
        <Box
          component={'img'}
          sx={{
            width: '35%',
            height: 'auto',
            marginTop: '60px',
            display: 'flex',
            alignSelf: 'flex-start'
          }}
          src={heroImg}
        />
      </Box>
      {/* Project List */}
      <Box sx={{
        px: '40px',
        mt: '70px'
      }}>

        <div className='container'>
          <div className="row d-flex justify-content-evenly align-items-center">
            {CATALOG_MOCK_DATAS.map((value, index) => (

              <div key={`column-${index}`} className="col-md-5 gap-5 mb-5">
                <Card key={index} sx={{ maxWidth: 500, border: '16px solid #fff' }}>
                  <CardActionArea href={`/catalog/${value.id}`}>
                    <Box sx={{
                      bgcolor: '#1e1e1e',
                      p: '15px'
                    }}>
                      <CardMedia
                        sx={{
                          width: '100%',
                          height: '180px'
                        }}
                        image={value.imgUrl}
                        alt="space arena"
                      />
                      <CardContent sx={{
                        pl: '0px',
                        py: '0px',
                        '&.MuiCardContent-root:last-child': {
                          pb: 0
                        }
                      }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                          fontFamily: 'ITC Kabel Std Ultra, Neue Kabel, Roboto, Arial, sans-serif',
                          fontWeight: '800',
                          fontSize: '40px',
                          color: '#FFFCEC',
                          py: '10px',
                          m: 0
                        }}>
                          {value.title}
                        </Typography>
                      </CardContent>
                    </Box>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Box>

    </Box>
  )
}

export default CatalogContent

import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Home() {
  return (
    <>
      <div style={{ minHeight: `calc(100vh - 70px)`, backgroundColor: 'lightgrey' }}>
        <Box sx={{ ml: { sm: '240px' }, }}>
          <Grid container>
            <Grid item xl={4}>
              <Stack spacing={2} direction='row' sx={{ bgcolor: 'white' }}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div' sx={{color:'#ffffff'}}>
                      $500.00
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )
}

export default Home
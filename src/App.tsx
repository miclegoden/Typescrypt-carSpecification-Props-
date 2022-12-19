import React, { useState, useEffect } from 'react'
import Header from './component/Header'
import Input from './component/Input'
import Show from './component/Show'
import { styled } from '@mui/material/styles'
import MuiGrid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import './App.css'

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}))

export interface ListType {
  nameSpecification: string
  isAirSuspension: boolean
  engine: string
  interiorMaterials: string
  color: string
  wheelRims: string
  typeOfWheels: string
  signatureOnHood: string
}

function App() {
  const [list, setList] = useState<ListType[]>([])

  return (
    <div>
      <Header />
      <Grid container>
        <Grid item xs>
          <Show list={list} />
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs>
          <Input setList={setList} list={list} />
        </Grid>
      </Grid>
    </div>
  )
}

export default App

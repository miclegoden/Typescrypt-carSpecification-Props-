import React, { useState, createContext, useContext } from 'react'
import SelectItem from './SelectItem'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

import { selectTags } from '../../common'
import Show from '../Show'
import { ListType } from '../../App'

const Input = (props: { setList: Function; list: ListType[] }) => {
  // const {}
  const [nameSpecific, setNameSpecific] = useState<string>('')
  const [chooseAir, setChooseAir] = useState<boolean>(false)
  const [signHood, setSignHood] = useState<string>('')
  const [itemData, setItemData] = useState({
    nameSpecification: '',
    isAirSuspension: false,
    engine: '',
    interiorMaterials: '',
    color: '',
    wheelRims: '',
    typeOfWheels: '',
    signatureOnHood: '',
  })
  const onListChange = (key: string, value: string) => {
    console.log(key, value)
    itemData.nameSpecification = nameSpecific
    itemData.isAirSuspension = chooseAir
    itemData.signatureOnHood = signHood
    let data: any = itemData
    data[key] = value
    console.log(data)
    setItemData(data)
  }
  const saveData = (event: any) => {
    event.preventDefault()

    let getData = props.list
    getData.push(itemData)
    console.log(getData)
    props.setList(getData)
  }
  return (
    <div>
      <Box
        className=" flex flex-col flex-wrap p-8 space-y-8"
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Name of specification"
          variant="outlined"
          value={nameSpecific}
          onChange={(e) => setNameSpecific(e.target.value)}
        />
        {Object.values(selectTags).map((selectTag) => (
          <SelectItem
            data={selectTag}
            onListChange={onListChange}
            listKey={selectTag.id}
          />
        ))}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={chooseAir}
                onChange={(e) => setChooseAir(e.target.checked)}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="Air suspension"
          />
        </FormGroup>

        <TextField
          fullWidth
          id="outlined-basic"
          label="Signature on hood"
          variant="outlined"
          value={signHood}
          onChange={(e) => setSignHood(e.target.value)}
        />
        <Box className="flex justify-between" sx={{ flexGrow: 1 }}>
          <Button variant="contained">+ new configuration option</Button>
          <Button variant="contained" onClick={saveData}>
            Saves
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default Input

import React, { useState, useEffect } from 'react'
import { Theme, useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface ItemProps {
  data: {
    name: string
    types: string[]
  }
  onListChange: Function
  listKey: string
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name: string, selectItem: string, theme: Theme) {
  return {
    fontWeight:
      selectItem.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

const SelectItem = (props: ItemProps) => {
  const { onListChange, listKey } = props
  const theme = useTheme()
  const [selectItem, setSelectItem] = useState('')
  const [open, setOpen] = useState<boolean>(false)
  const [saveInfo, setSaveInfo] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selectItem>) => {
    setSelectItem(event.target.value)
    console.log(event.target.value)
    onListChange(listKey, event.target.value)
    // const {
    //   target: { value },
    // } = event
    // setSelectItem(
    //   // // On autofill we get a stringified value.
    //   typeof value === 'string' ? value.split(',') : value,
    // )
    // setSaveInfo(selectItem)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const saveData = () => {
    // setSaveInfo(selectItem)
    console.log(saveInfo)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-multiple-name-label">{props.data.name}</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={selectItem}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
      >
        {props.data.types.map((type) => (
          <MenuItem
            key={type}
            value={type}
            style={getStyles(type, selectItem, theme)}
          >
            {type}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectItem

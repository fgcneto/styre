import type { NextPage } from 'next'
import ButtonIconed from '../../buttons/ButtonIconed'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import styles from './styles.module.scss'
import React from 'react'
import {
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'

const MenuWrapper: NextPage = () => {
  const [area, setArea] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setArea(event.target.value as string)
  }

  const [age, setAge] = React.useState('')

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuItem}>
        <FormLabel
          className={styles.menuTitleItem}
          id="demo-form-control-label-placement"
        >
          Área de Fornecimento
        </FormLabel>
        <FormControl fullWidth focused={false}>
          <Select
            sx={{
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 0 }
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={area}
            onChange={handleChange}
          >
            <MenuItem value={10}>Administração</MenuItem>
            <MenuItem value={20}>Setor de RH</MenuItem>
            <MenuItem value={30}>Marketing</MenuItem>
          </Select>
        </FormControl>
        <div className={styles.menuTitleItem}>
          Fornecedores
          <ButtonIconed
            className={styles.symbolMenuItem}
            Icon={MdOutlineArrowDropDown}
          />
        </div>
        <div className={styles.menuTitleItem}>
          Materiais
          <ButtonIconed
            className={styles.symbolMenuItem}
            Icon={MdOutlineArrowDropDown}
          />
        </div>
        <div className={styles.menuTitleItem}>
          Unidades
          <ButtonIconed
            className={styles.symbolMenuItem}
            Icon={MdOutlineArrowDropDown}
          />
        </div>
      </div>
    </div>
  )
}

export default MenuWrapper

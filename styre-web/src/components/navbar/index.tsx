import type { NextPage } from 'next'
import React from 'react'
import Modal from 'react-modal'
import { MdOutlinePersonOutline } from 'react-icons/md'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Logo from '../logo'
import MenuWrapper from './menuWrapper'
import ButtonIconed from '../buttons/ButtonIconed'
import styles from './styles.module.scss'
import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

const NavBar: NextPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [area, setArea] = React.useState('')
  const [state, setState] = React.useState({})

  const handleChange = (event: SelectChangeEvent) => {
    setArea(event.target.value as string)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    })
  }

  const customStyles = {
    content: {
      width: '780px',
      heigth: '624px',
      top: '40%',
      left: '40%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div className={styles.headingWrapper}>
            <p className={styles.title}>Novo Colaborador</p>
            <hr className={styles.line} />
          </div>

          <form>
            <div className={styles.labelNameList}>
              <br />
              <p>Nome do Colaborador</p>
              <TextField id="standard-text" multiline variant="standard" />
            </div>
            <div className={styles.inputPriorityList}>
              <FormLabel id="demo-form-control-label-placement">
                Área de Atuação
              </FormLabel>
              <div className={styles.inputFornecimento}>
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
              </div>
              <div className={styles.inputPermissoes}>
                <p className={styles.labelPermissoes}>Permissões</p>
                <p className={styles.labelChechbox} />
                <p className={styles.labelSelectPermissoes}>
                  Selecione abaixo as permissões necessárias para esse
                  colaborador
                </p>
                <div className={styles.framePermissoes}>
                  <Box sx={{ display: 'flex' }}>
                    <FormControl
                      sx={{ m: 3 }}
                      component="fieldset"
                      variant="standard"
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChangeCheckbox}
                              name="criarListas"
                            />
                          }
                          label="Criar listas"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChangeCheckbox}
                              name="moverListas"
                            />
                          }
                          label="Mover Listas"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChangeCheckbox}
                              name="criarAreaFornecimento"
                            />
                          }
                          label="Criar Área de fornecimento"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChangeCheckbox}
                              name="criarFornecedores"
                            />
                          }
                          label="Criar Fornecedores"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              onChange={handleChangeCheckbox}
                              name="criarUnidade"
                            />
                          }
                          label="Criar Unidade"
                        />
                      </FormGroup>
                    </FormControl>
                  </Box>
                </div>
              </div>
            </div>
            <div className={styles.buttonsWrapper}>
              <Stack direction="row" spacing={1}>
                <Button className={styles.buttonCancelar}>Cancelar</Button>
                <Button className={styles.buttonAdicionar}>Adicionar</Button>
              </Stack>
            </div>
          </form>
        </Modal>
      </div>
      <div className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <Logo />
          <MenuWrapper />
          <div className={styles.profileWrapper}>
            <ButtonIconed
              onClick={() => {
                openModal()
              }}
              className={styles.symbolProfile}
              Icon={MdOutlinePersonOutline}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar

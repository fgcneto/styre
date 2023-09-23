import type { NextPage } from 'next'
import React from 'react'
import Modal from 'react-modal'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FilledInput from '@mui/material/FilledInput'
import ButtonIconed from '../../components/buttons/ButtonIconed'
import { MdEditNote } from 'react-icons/md'
import Card from '../../components/cards'
import styles from './styles.module.scss'
import { BpRadio } from '../../components/buttons/buttonRadio'
import { IconButton, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Button from '@mui/material/Button'
import SelectMuilt from '../../components/select'

const CardContainer: NextPage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [area, setArea] = React.useState('')
  const [materiais, setMateriais] = React.useState([])

  const handleChange = (event: SelectChangeEvent) => {
    setArea(event.target.value as string)
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  // function addMateriais(material) {
  //   setMateriais(material)
  // }

  const customStyles = {
    content: {
      width: '780px',
      heigth: '624px',
      top: '50%',
      left: '35%',
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
            <p className={styles.title}>Nova Lista</p>
            <hr className={styles.line} />
          </div>

          <form>
            <br />
            <p className={styles.labelNameList}>Nome da lista</p>
            <TextField id="standard-textarea" multiline variant="standard" />
            <br />
            <br />
            <div className={styles.inputPriorityList}>
              <FormControl focused={false}>
                <FormLabel id="demo-form-control-label-placement">
                  Defina da prioridade da lista
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-form-control-label-placement"
                  name="position"
                  defaultValue="baixa"
                >
                  <FormControlLabel
                    value="baixa"
                    control={<BpRadio />}
                    label="Baixa"
                  />
                  <FormControlLabel
                    value="media"
                    control={<BpRadio />}
                    label="Média"
                  />
                  <FormControlLabel
                    value="alta"
                    control={<BpRadio />}
                    label="Alta"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormLabel id="demo-form-control-label-placement">
                Área de Fornecimento
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
                    <MenuItem value={10}>Equipamentos</MenuItem>
                    <MenuItem value={20}>Material de Escritório</MenuItem>
                    <MenuItem value={30}>Material de Limpeza</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={styles.inputMateriais}>
              <ul>
                {materiais.map(material => (
                  <li key="notunique">{material}</li>
                ))}
              </ul>
              <SelectMuilt />
            </div>

            <small className={styles.inputFileTitle}>Adicionar anexos</small>
            <Button variant="text" component="label">
              Inserir
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </form>
        </Modal>
      </div>
      <div className={styles.cardsContainer}>
        <Card label="Pendentes" />
        <Card label="Em orçamento" />
        <Card label="Em compra" />
        <Card label="Finalizados" />
        <div className={styles.novaLista}>
          <ButtonIconed
            onClick={() => {
              openModal()
            }}
            className={styles.symbolProfile}
            Icon={MdEditNote}
          />
        </div>
      </div>
    </>
  )
}

export default CardContainer

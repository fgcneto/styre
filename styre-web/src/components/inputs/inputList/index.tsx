import type { NextPage } from 'next'
import React from 'react'
import Modal from 'react-modal'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { IoMdAttach } from 'react-icons/io'
import { BsArrowLeft } from 'react-icons/bs'
import styles from './styles.module.scss'
import { BpRadio } from '../../../components/buttons/buttonRadio'
import Material from '../inputMaterial'
import Cadeira from '../../../assets/material-cadeira.png'
import ButtonGeneric from '../../buttons/ButtonGeneric'

const InputList: NextPage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const [area, setArea] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setArea(event.target.value as string)
  }

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  const customStyles = {
    content: {
      width: '60%',
      heigth: '70%',
      left: '10%'
    }
  }

  return (
    <>
      <div className={styles.contentContainer}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <form>
            <div className={styles.buttonVoltar}>
              <ButtonGeneric
                onClick={() => {
                  closeModal()
                }}
                className={styles.iconButtonVoltar}
                Icon={BsArrowLeft}
              />
              <p className={styles.labelButtonVoltar}>Voltar</p>
            </div>
            <div className={styles.statusWrapper}>
              <p className={styles.labelTitleList}>Lista Pendente</p>
              <p className={styles.linePrioridadeList} />
            </div>
            <div className={styles.inputNameList}>
              <p className={styles.labelNameList}>Nome da lista</p>
              <div className={styles.inputList}>
                <TextField
                  InputProps={{
                    className: styles.lineNomeList + styles.labelNameListInput
                  }}
                  id="standard-textarea"
                  multiline
                  variant="standard"
                />
              </div>
            </div>
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
            <div className={styles.inputContainerAreaFornecimento}>
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
            <div className={styles.materiaisContainerList}>
              <div className={styles.materiaisWrapper}>
                <p className={styles.inputTitleMateriais}>Materiais</p>
                <div className={styles.inputFrameMateriais}>
                  <Material
                    label={'Cadeira de Balanço'}
                    imageUrl={Cadeira}
                    valorUnitario={10.5}
                    quantidade={2}
                  />
                  <Material
                    label={'Cadeira de Balanço'}
                    imageUrl={Cadeira}
                    valorUnitario={3200.5}
                    quantidade={2}
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputFile}>
              <small className={styles.inputFileTitle}>Adicionar anexos</small>
              <div className={styles.placeholderFileAttach}>
                <p className={styles.materialSymbolAttachFile}>
                  <IoMdAttach />
                </p>
                <Button
                  variant="text"
                  component="label"
                  className={styles.titleLabelAttach}
                >
                  Clique aqui para inserir anexo
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </div>
            </div>
            <div className={styles.inputData}>
              <small className={styles.inputTitleData}>Data</small>

              <div className={styles.inputDataLayout}>
                <input type="date" id="html5-date-input" />
              </div>
            </div>
            <div className={styles.inputContainerFornecedores}>
              <FormLabel id="demo-form-control-label-placement">
                Fornecedores
              </FormLabel>
              <div className={styles.labelTitleFornecedores}>
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
                    <MenuItem value={10}>Miranda</MenuItem>
                    <MenuItem value={20}>Casa Norte</MenuItem>
                    <MenuItem value={30}>Atacadão da Limpeza</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className={styles.inputPdf}>
              <small className={styles.labelTitlePdf}>Documento</small>
              <div className={styles.placeholderInsertPdf}>
                <div className={styles.iconMaterialPdf}>
                  <Stack direction="row" spacing={-3}>
                    <PictureAsPdfIcon />
                    <Button
                      variant="text"
                      component="label"
                      className={styles.titleLabelAttachPdf}
                    >
                      Clique aqui para gerar o PDF
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
            <div className={styles.buttonsWrapper}>
              <Stack direction="row" spacing={1}>
                <Button
                  className={styles.buttonCancelar}
                  onClick={() => {
                    closeModal()
                  }}
                >
                  Cancelar
                </Button>
                <Button className={styles.buttonAdicionar}>Salvar</Button>
              </Stack>
            </div>
          </form>
        </Modal>
      </div>
      <div
        className={styles.input}
        onClick={() => {
          openModal()
        }}
      >
        <p className={styles.linePrioridade} />
        <div className={styles.labelTitle}>Material de Limpeza</div>
        <div className={styles.frame}>
          <div className={styles.frameQuantidade}>
            <div className={styles.symbolShopping}>
              <MdOutlineShoppingCart />
            </div>
            <p className={styles.labelFrames}>6</p>
          </div>
          <div className={styles.frameAnexo}>
            <div className={styles.symbolAttach}>
              <IoMdAttach />
            </div>
            <p className={styles.labelFrames}>0</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputList

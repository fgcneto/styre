import { InputHTMLAttributes } from 'react'
import Image, { StaticImageData } from 'next/image'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import styles from './styles.module.scss'
import React from 'react'
import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5'
import ButtonGeneric from '../../buttons/ButtonGeneric'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  imageUrl: StaticImageData
  valorUnitario: number
  quantidade: number
  valorTotal?: number
}

export default function Material({
  imageUrl,
  label,
  valorUnitario,
  quantidade
}: Props): JSX.Element {
  const [newQuantidade, setNewQuantidade] = React.useState(quantidade)
  const [valorTotal, setValorTotal] = React.useState(
    newQuantidade * valorUnitario
  )

  const removeQuantidade = () => {
    // Previous value/State
    setNewQuantidade(prevNewQuantidade => prevNewQuantidade - 1)
  }

  function addQuantidade(): void {
    setNewQuantidade(prevNewQuantidade => prevNewQuantidade + 1)
  }

  return (
    <div className={styles.layoutMaterialInfo}>
      <div className={styles.layoutFrame}>
        <div className={styles.imageMaterial}>
          <Image
            src={imageUrl}
            alt="Imagem do Material"
            width={60}
            height={60}
          />
        </div>
        <p className={styles.labelTitle}>{label}</p>
      </div>
      <div className={styles.placeholderValor}>
        <p className={styles.labelValor}>R$ {valorUnitario}</p>
      </div>
      <div className={styles.placeholderQuantidade}>
        <div>
          <ButtonGeneric
            className={styles.materialSymbolSubtracao}
            onClick={removeQuantidade}
            Icon={IoRemoveOutline}
          />
        </div>
        <p className={styles.labelQuantidade}>{newQuantidade}</p>
        <div>
          <ButtonGeneric
            className={styles.materialSymbolAdicao}
            onClick={() => {
              addQuantidade()
            }}
            Icon={IoAddOutline}
          />
        </div>
      </div>
      <div className={styles.placeholderValorTotal}>
        <p className={styles.labelValorTotal}>
          R$ {newQuantidade * valorUnitario}
        </p>
      </div>
      <div className={styles.placeholderDetalhes}>
        <ModeCommentOutlinedIcon />
      </div>
    </div>
  )
}

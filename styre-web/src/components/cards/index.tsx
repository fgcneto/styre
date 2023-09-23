import { InputHTMLAttributes } from 'react'
import InputList from '../inputs/inputList'
import styles from './styles.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  cardClassName?: string
}

export default function Card({ label, cardClassName = '' }: Props) {
  return (
    <div className={styles.card + cardClassName}>
      <p className={styles.labelTitle}>{label}</p>
      <InputList />
    </div>
  )
}

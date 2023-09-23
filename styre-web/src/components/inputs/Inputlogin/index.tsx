import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
}

export default function InputLogin({ label, ...rest }: Props) {
  return (
    <>
      <div className={styles.input}>
        <div className={styles.inputTitle}>
          <p>{label}</p>
        </div>
        <div className={styles.containerInput}>
          <input {...rest} />
        </div>
      </div>
    </>
  )
}

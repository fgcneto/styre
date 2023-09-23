import styles from './styles.module.scss'
import { IconBaseProps } from 'react-icons'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.FC<IconBaseProps>
}

export default function ButtonIconed({
  children,
  className,
  Icon,
  ...rest
}: Props) {
  return (
    <button className={className + ' ' + styles.buttonContainer} {...rest}>
      <div>
        <Icon style={{ marginRight: 8 }} size={20} />
        {children}
      </div>
    </button>
  )
}

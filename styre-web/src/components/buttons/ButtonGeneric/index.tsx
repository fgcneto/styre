import { IconBaseProps } from 'react-icons'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.FC<IconBaseProps>
}

export default function ButtonGeneric({
  children,
  className,
  Icon,
  ...rest
}: Props) {
  return (
    <button className={className} {...rest}>
      <div>
        <Icon style={{ marginRight: 8 }} />
        {children}
      </div>
    </button>
  )
}

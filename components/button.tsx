export interface ButtonProps {
  onClick?: (e: React.FormEvent) => Promise<void>
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
}) => (
  <button className={className} disabled={disabled} onClick={onClick}>
    {children}
  </button>
)

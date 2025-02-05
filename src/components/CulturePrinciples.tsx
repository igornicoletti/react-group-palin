import { principlesVariants } from '../styles'

interface Props {
  name: string
  description: string
}

export const CulturePrinciples = ({ name, description }: Props) => {
  const principlesStyles = principlesVariants()

  return (
    <li className={principlesStyles.listItem()}>
      <div className={principlesStyles.content()}>
        <strong className={principlesStyles.title()} aria-label={`Princípio: ${name}`}>
          {name}.{' '}
        </strong>
        <span>{description}</span>
      </div>
    </li>
  )
}

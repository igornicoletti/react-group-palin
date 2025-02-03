type Props = {
  name: string
  description: string
}

export const CulturePrinciples = ({ name, description }: Props) => {
  return (
    <li className="text-base text-dracula-dark/75 before:bg-dracula-dark after:bg-dracula-dark">
      <div className="pl-8 relative before:absolute after:absolute before:bg-dracula-main after:bg-dracula-dark/10 before:top-0 before:left-0 before:h-6 before:w-px after:top-8 after:bottom-0 after:left-0 after:w-px">
        <strong className="font-semibold text-dracula-dark" aria-label={`Princípio: ${name}`}>{name}.{' '}</strong>
        <span>{description}</span>
      </div>
    </li>
  )
}

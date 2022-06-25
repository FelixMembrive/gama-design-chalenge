interface IRepositoryItemProps{
    repository: {
        name: string
        description: string
        html_url: string
        id: number
        favorite?: boolean
    }
    handleFavorite: (id:number) => void
}

export default function RepositoryItem(props: IRepositoryItemProps) {
  return (
    <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>acessar repositório</a>
        {props.repository.favorite && <span>Favorito</span>}
        <button onClick={() => props.handleFavorite(props.repository.id)}>Favoritar</button>
    </li>
  )
}

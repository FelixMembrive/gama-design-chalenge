import { Button } from "../../../../components/Button/styles"
import { Item } from "./styles"


interface IRepositoryItemProps{
    repository: {
        name: string
        description: string
        html_url: string
        id: number
        favorite?: boolean
    }
    handleFavorite: (id:number) => void
    toggleFavoritar: () => void
}

export default function RepositoryItem(props: IRepositoryItemProps) {
  return (
    <Item>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.html_url}>acessar repositório</a>
        {props.repository.favorite && <span>{props.repository.favorite? "Favoritado" : ""}</span>}
        <Button onClick={() => props.handleFavorite(props.repository.id)}>Favoritarrr</Button>
    </Item>
  )
}

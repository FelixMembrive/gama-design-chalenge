import { useEffect, useState } from 'react'
import RepositoryItem from '../RepositoryItem';

interface IRepository {
    name: string
    description: string
    html_url: string
    favorite?: boolean
    id: number
}

export default function RespositoryList() {

    const [repositories, setRepositories] = useState<IRepository[]>([]);

    function handleFavorite(id: number) {
        const newRepositories = repositories.map((repo) => {
            return repo.id == id ? { ...repo, favorite: true } : repo
        })
        setRepositories(newRepositories)
    }

    const name = useEffect(() => {
        fetch("https://api.github.com/users/FelixMembrive/repos")
            .then((res) => res.json())
            .then((data) => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map((repository) => {
                    return (
                        <RepositoryItem
                            key={repository.name}
                            repository={repository}
                            handleFavorite={(id) => handleFavorite(id)}
                    />
                )
                })}
            </ul>
        </section>
    )
}
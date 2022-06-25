import baseAPI from "./config";

interface IResponseRepository{
    name: string
    descriptions: string
    html_url: string
}

export function listRepositories(): Promise<IResponseRepository> {
    return baseAPI.get("/users/IsisFraga/repos")
}

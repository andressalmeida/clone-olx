import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div>
            <h1>404 - Pagina não encontrada</h1>

        <Link to="/">Voltar para a Home</Link>

        </div>
    )
}
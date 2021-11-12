import './table.css';

export const TableStudents = () => {
    return (
        <div className="tableee">
            <table>
                <tr className="head">
                    <th>Cognome</th>
                    <th>Nome</th>
                    <th>Utente_githb</th>
                    <th>Nome_repo</th>
                    <th>Totale_Commint</th>
                    <th>Data_creazione</th>
                    <th>Ultimo_aggiornameto</th>
                </tr>
                <tr>
                    <td>Farfan</td>
                    <td>Francesco</td>
                    <td>frankfarfan96</td>
                    <td>farfan-francesco-github</td>
                    <td>5</td>
                    <td>29/10/2021</td>
                    <td>29/10/2021</td>
                </tr>
                <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                </tr>
            </table>
        </div>
    )
}
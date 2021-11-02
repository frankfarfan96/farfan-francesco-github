import dataGit from './mock/datiUtente.json'
import dataUtenti from '/mock/datiGit.json'

export const CreateJson = () => {
    const Data = {...dataGit, ...dataUtenti}
    return Data;
}



import React from 'react';
import './results.css';
import { Repo } from "./repo/repo"
import { Pages } from "./pages/pages"
import { Table } from "./table/table"


export const Results = () => {
    return(
        <div className="body">
         <Repo />
         <Table />
         <Pages />
        </div>
    )
}



 
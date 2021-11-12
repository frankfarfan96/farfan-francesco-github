import React from 'react';
import './results.css';
import { Repo } from "./repo/repo"
import { TableStudents } from "./tablestudents/table"


export const Results = (props) => {
    return(
        <div className="body">
         <Repo totRepos={props.lenght}/>
         <TableStudents />
        </div>
    )
}



 
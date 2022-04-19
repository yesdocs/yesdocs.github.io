import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectTechnologies,
} from './JobSlice';
import styles from './Job.module.css';

export function JobTechnologies( { onSetFilter } ) {
  const technology = useSelector(selectTechnologies);
  
  return (
        <div className={'row mt-4'}>
            <div className='col-12'>
                <h4 className="sideHeading">
                    Technologies
                </h4>
                <div className={styles.techList}>
                    { technology && technology.map(tech => {
                        return (<span key={`${tech.replace(" ","_")}`}
                                    className={styles.techListItem}
                                    onClick={(e) => { onSetFilter(tech) }} >
                                        {tech}
                                </span>)
                    })}
                </div>
              
            </div>
        </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectHighlights,
  selectAllJobs,
} from './JobSlice';
import styles from './Job.module.css';

export function JobHighlights() {
  const jobHighlights = useSelector(selectHighlights);
  const jobs = useSelector(selectAllJobs);
  
  return (
        <div className={'row'}>
            <div className='col-12'>
                <div className={'row'}>
                    <div className='col-12'>
                        <h5 className={styles.highlightHeader}>Highlights</h5>
                    </div>
                </div>
                <div className={'row'}>
                    <div className='col-12'>
                        <ul className={styles.highlightList}>
                            { jobHighlights && jobHighlights.map((highlight) => {
                                const job = jobs.find( j => j.id === highlight.forJobId ) || { employer: {}};
                                return (<li
                                            key={`high-${highlight.forJobId}`}
                                            className={styles.highlightItem}>
                                                {highlight.description}<span className={styles.highlightItemEmployer}>- {job.employer.name || highlight.forJobId}</span>
                                        </li>
                                        )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}

import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectSummary,
} from './JobSlice';
import styles from './Job.module.css';

export function SummaryJob() {
  const summaryJob = useSelector(selectSummary);
  
  return (
        <div className={'row'}>
            <div className='col-12'>
                <div className={'row'}>
                    <div className='col-12'>
                    { summaryJob &&
                        <h4>{summaryJob.title}</h4>
                    }
                    </div>
                </div>
                <div className={'row'}>
                    <div className='col-12'>
                    { summaryJob &&
                        <p className='ms-3'>{summaryJob.summary}</p>
                    }
                    </div>
                </div>
                <div className={'row'}>
                    <div className='col-12'>
                        <ul className={styles.summaryList}>
                            { summaryJob && summaryJob.responsibilities && summaryJob.responsibilities.map((resp,i) => {
                                return (<li key={`sum-${i}-${resp.substring(0,4)}`} className={styles.summaryListItem}>{resp}</li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  );
}

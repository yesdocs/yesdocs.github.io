import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectFilter,
  selectJobs,
} from './JobSlice';
import styles from './Job.module.css';

export function Job() {
  const jobs = useSelector(selectJobs);
  const techFilter = useSelector(selectFilter).toLowerCase();
  
  return (
    <div className={'row'}>
      <div className='col-12'>
        { jobs && jobs.map((jb,idx) => {
          return (
            <div key={`${jb.employer.name.replace(" ","-")}-${idx}`} className={'row ' + styles.jobRow}>
              <div className='col-12'>
                  <div className={'row'}>
                      <div className='col'>
                        <h4 className={styles.jobTitle}>{jb.title}</h4>
                        <h6 className={styles.jobDuration}>{`${jb.employer.start} - ${jb.employer.end}`}</h6>
                      </div>
                      <div className='col text-end'>
                          <h6 className={styles.empName}>{jb.employer.name}</h6>
                          <p className={styles.empLocation}>{jb.employer.cityState}</p>
                      </div>
                  </div>
                  <div className={'row'}>
                      <div className='col-12'>
                      { jb &&
                          <p className={`ms-3 ${styles.jobSummary}`}>{jb.summary}</p>
                     }
                </div>
              </div>
              <div className={'row'}>
                <div className='col-12'>
                  <ul className={styles.jobList}>
                              { jb && jb.responsibilities && jb.responsibilities.map((resp,i) => {
                                  return (<li key={`${i}-${resp.substring(0,4)}`} className={styles.jobListItem}>{resp}</li>)
                              })}
                  </ul>
                </div>
              </div>
              <div className={'row'}>
                <div className='col-12'>
                  <h5 className={styles.jobTechListHeader} >Technologies Leveraged</h5>
                  <div className={styles.jobTechList}>
                      { jb && jb.tags && jb.tags.map((tech,i) => {
                        const classNameToUse = ( techFilter && tech.toLowerCase().indexOf(techFilter) >= 0) ? styles.jobTechListItem + ' ' + styles.techListItemSelected : styles.jobTechListItem
                        return (<span key={`${i}-${tech.substring(0,4)}`} className={classNameToUse}>{tech}</span>)
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}

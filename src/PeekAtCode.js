import React from 'react';
import logo from './react.png'
import './App.css'

export default function PeekAtCode() {
  return (
        <div className={'row no-print'}>
            <div className='col-12'>
                <div className={"peek-at-source"} >
                    <a href="https://github.com/yesdocs/yesdocs.github.io" target="github">
                            <img src={logo} className="logo-sm" alt='Built with React' title='Built with React' /> Built using React/Redux
                    </a>
                </div>
            </div>
        </div>
  );
}

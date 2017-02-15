/**
 * Created by DELL on 2017/2/15.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Greeter from './Greeter';
import config from './config.json';
import NoteList from './notelist';

ReactDOM.render(
    <NoteList>
        <Greeter name={config.nameList[0]}/>
        <Greeter name={config.nameList[1]}/>
    </NoteList>,
    document.getElementById('root')
);

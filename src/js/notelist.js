/**
 * Created by DELL on 2017/2/15.
 */
import React, {Component} from 'react';
export default class NoteList extends Component {
    render(){
        return(
            <ol>
                {
                    React.Children.map(
                        this.props.children, function (child) {
                            return <li>{child}</li>;
                        }
                    )
                }
            </ol>
        )
    }
}
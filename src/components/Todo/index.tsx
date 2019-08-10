import * as React from 'react';
import './css.scss';

interface props {
    no: number;
    title: string;
    done: boolean;
    onDelete: (index: number) => void;
}

const Todo = (props: props) => {
    return (
        <div className='todo'>
            <div className='block no'>{`NO. ${props.no}`}</div>
            <div className='block checkbox'>
                <input type="checkbox" />
            </div>
            <div className='block title'>{`${props.title}`}</div>
            <div className='block delete'>
                <div onClick={() => props.onDelete(props.no)}>
                    delete
                </div>
            </div>
        </div>
    )
}

export default React.memo(Todo);
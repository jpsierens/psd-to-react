import React from 'react';
import { root, container, subscribe, input } from './style.scss';

const Header = () =>
        <header className={root}>
            <div className={container}>
                <div className={subscribe}>
                    subscribe to:&nbsp;
                    <a href="#">Posts</a> |&nbsp;
                    <a href="#">Comments</a> |&nbsp;
                    <a href="#">Email</a>
                </div>
                <div>
                    <input
                        className={input}
                        type="text"
                        placeholder="Search Keywords" />
                </div>
            </div>
        </header>;


export default Header;

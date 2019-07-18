import * as React from 'react';
import { History } from 'history';

const Header: React.FC<IHeaderProps> = ({ history }) => {

    return (
        <div className="header">
            <button onClick={() => handleClearUsername(history)}>
                Change Username
            </button>
        </div>
    );

};

const handleClearUsername = (history: History) => {

    window.sessionStorage.removeItem('username');
    history.push('/');

};

export default Header;

interface IHeaderProps {
    history: History;
}

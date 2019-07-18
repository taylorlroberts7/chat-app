import * as React from 'react';
import { IMessage } from './Chat';

const Message: React.FC<IMessageProps> = ({ message }) => {

    const username = window.sessionStorage.getItem('username');
    const isFromCurrentUser = username === message.user;
    const classNames = `message ${isFromCurrentUser ? 'right' : 'left'}`;

    const date = new Date(message.sentAt);
    const dateString = date.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
    const timeString = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={classNames}>
            <div className="content">
                <span>{message.text}</span>
            </div>
            <span className="user-info">
                {message.user} @ {dateString} {timeString}
            </span>
        </div>
    );
}

export default Message;

interface IMessageProps {
    message: IMessage;
}

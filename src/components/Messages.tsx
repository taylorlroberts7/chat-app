import * as React from 'react';
import { Message } from './index';
import { IMessage } from './Chat';

const Messages: React.FC<IMessagesProps> = ({ messages }) => (
    <div className="messages">
        {!messages.length && (
            <span>
                No messages yet. How about you get this party started?
                <span aria-label="party popper" role="img"> 🎉</span>
            </span>
        )}
        {messages.map((m: IMessage, i: number) => (
            <Message message={m} key={`${m.user}-${i}`} />
        ))}
    </div>
);

export default Messages;

interface IMessagesProps {
    messages: IMessage[];
}

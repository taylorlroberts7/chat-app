import * as React from 'react';
import { database } from '../firebase';
import { Messages } from './index';

export default class Chat extends React.Component<null, IChatState> {

    state: IChatState = {
        error: null,
        newMessage: null,
        messages: []
    }

    _inputRef = React.createRef<HTMLTextAreaElement>();

    componentDidMount() {

        const messagesRef = database.ref('messages')
            .orderByKey()
            .limitToLast(100);

        messagesRef.on('value', snapshot => {

            let messagesObj = snapshot.val();
            let messages: any[] = [];

            if (messagesObj) {

                Object.keys(messagesObj)
                    .forEach(key => messages.push({
                        ...messagesObj[key]
                    }));

            }

            this.setState({ messages });

        });

    }

    render() {

        const { error, messages } = this.state;

        return (
            <div>
                <Messages messages={messages} />
                <form
                    className="message-form"
                    onSubmit={this._handleSendMessage}
                >
                    <textarea
                        onChange={e => this.setState({ newMessage: e.target.value })}
                        onKeyDown={this._handleEnterPress}
                        ref={this._inputRef}
                    />
                    <button>Send</button>
                </form>
                {error}
            </div>
        )
    }

    _handleEnterPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {

        // This allows users to send message when enter key is pressed and shift key is not held down
        if (event.keyCode === 13 && !event.shiftKey) {

            event.preventDefault();
            return this._handleSendMessage();

        }

        return;

    }

    _handleSendMessage = (event?: React.FormEvent) => {

        event && event.preventDefault();

        const { newMessage } = this.state;

        if (!newMessage) {

            return;

        }

        try {

            const username = window.sessionStorage.getItem('username');

            const value = {
                text: newMessage,
                sentAt: Date.now(),
                user: username
            };

            // Add message to DB
            database.ref('messages').push(value);

            // Clear message input
            this._inputRef.current!.value = '';

        } catch (e) {

            // TODO: Update error message
            const error = 'Woopsies';
            this.setState({ error });

        }

    }

}

interface IChatState {
    error: string | null;
    newMessage: string | null;
    messages: IMessage[];
}

export interface IMessage {
    text: string;
    sentAt: number;
    user: string;
}

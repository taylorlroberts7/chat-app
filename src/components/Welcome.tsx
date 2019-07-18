import * as React from 'react';
import { database } from '../firebase';
import { RouteComponentProps } from 'react-router';

const { useState } = React;

const Welcome: React.FC<RouteComponentProps> = (props) => {

    const [error, setError] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);

    return (
        <div className="welcome">
            <div>
                <h1>WELCOME</h1>
                <span>Enter username to chat it up &darr;</span>
            </div>
            <form
                className="username-form"
                onSubmit={e => handleUsernameSubmit(e, username, props.history, setError)}
            >
                <input
                    aria-label="Username"
                    onChange={e => handleUsernameChange(e, setUsername, setError)}
                    placeholder="username"
                    type="text"
                />
                <span>{error}</span>
                <button>Start Chattin</button>
            </form>
        </div>
    );

};

const handleUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setUsername: React.Dispatch<React.SetStateAction<string | null>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {

    setUsername(event.target.value);
    setError(null);

};

const handleUsernameSubmit = (
    event: React.FormEvent,
    username: string | null,
    history: RouteComponentProps['history'],
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {

    event.preventDefault();

    if (!username) {

        const error = 'Hold up. Please enter a username to talk to the cool cats.';
        return setError(error);

    }

    sessionStorage.setItem('username', username!);
    database.ref('users').push({ username });
    history.push('/chat');

};

export default Welcome;

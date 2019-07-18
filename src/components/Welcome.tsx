import * as React from 'react';
import { database } from '../firebase';

const { useState } = React;

// TODO: change any type of props
const Welcome: React.FC = (props: any) => {

    const [username, setUsername] = useState<string | null>(null);

    return (
        <div className="welcome">
            <h1>WELCOME</h1>
            <form
                className="username-form"
                onSubmit={e => handleUsernameSubmit(e, username, props.history)}
            >
                <input
                    onChange={e => setUsername(e.target.value)}
                    placeholder="username"
                    type="text"
                />
                {/* <label>
                    Username
                    <input
                        onChange={e => setUsername(e.target.value)}
                        placeholder="username"
                        type="text"
                    />
                </label> */}
                <button>Start Chattin</button>
            </form>
        </div>
    );

}

// TODO: CHANGE ANY TYPE FOR HISORY
const handleUsernameSubmit = (event: React.FormEvent, username: string | null, history: any) => {

    // TODO: handle validation

    event.preventDefault();

    sessionStorage.setItem('username', username!);
    database.ref('users').push({ username });
    history.push('/chat');

}

export default Welcome;

import * as React from 'react';
import { fireEvent, render, getByPlaceholderText, getByText } from '@testing-library/react';
import { Welcome } from '../components';
import { getMockRouterProps } from './mocks';

const routerProps = getMockRouterProps({});
const setup = (props = routerProps) => render(<Welcome {...props} />)

describe('Welcome', () => {

    it('Renders without crashing', () => {

        const { container } = setup();

        expect(container.firstChild).toMatchSnapshot();

    });

    it('Navigates to chat when username submitted', () => {

        const pushMock = jest.fn();
        const props = {
            ...routerProps,
            history: {
                ...routerProps.history,
                push: pushMock
            }
        };
        const { container } = setup(props);

        const usernameInput = getByPlaceholderText(container, 'username');
        const submitButton = getByText(container, 'Enter Chat');

        fireEvent.change(usernameInput, { target: { value: 'MickeyMouse' } });
        fireEvent.click(submitButton);

        expect(pushMock).toBeCalledTimes(1);
        expect(pushMock).toHaveBeenCalledWith('/chat');

    });

});

import * as React from 'react';
import { render } from '@testing-library/react';
import { Chat } from '../components';
import { getMockRouterProps } from './mocks';

const routerProps = getMockRouterProps({});
const setup = () => render(<Chat {...routerProps} />);

describe('Chat', () => {

    it('Renders without crashing', () => {

        const { container } = setup();

        expect(container.firstChild).toMatchSnapshot();

    });

});

import { RouteComponentProps } from 'react-router';
import { UnregisterCallback, Href } from 'history';

// https://github.com/ReactTraining/react-router/issues/5675#issuecomment-352031134

//This is to mock out the dependencies for react router
export function getMockRouterProps<P>(data: P) {

    const location = {
        hash: "",
        key: "",
        pathname: "",
        search: "",
        state: {}
    };

    const props: RouteComponentProps<P> = {
        match: {
            isExact: true,
            params: data,
            path: "",
            url: ""
        },
        location: location,
        history: {
            length: 2,
            action: "POP",
            location: location,
            push: () => { },
            replace: () => { },
            go: (num) => { },
            goBack: () => { },
            goForward: () => { },
            block: (t) => {
                const temp: UnregisterCallback = null;
                return temp;
            },
            createHref: (t) => {
                const temp: Href = "";
                return temp;
            },
            listen: (t) => {
                const temp: UnregisterCallback = null;
                return temp;
            }
        },
        staticContext: {}
    };


    return props;
}

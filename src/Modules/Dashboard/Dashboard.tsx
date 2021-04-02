import React from 'react';
import { Projects } from '../Projects/Projects';
import { Users } from '../Users/Users';

export function Dashboard(): JSX.Element {
    return <>
        Dashboard:
        <Users />
        <Projects />
    </>;
}
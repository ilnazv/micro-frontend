import React from 'react';
import { Projects } from '../projects/projects';
import { Users } from '../users/users';

export const Dashboard = (): JSX.Element => (
    <>Dashboard:
        <Projects />
        <Users />
    </>
)

export default Dashboard;
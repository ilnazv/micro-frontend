/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import React, { Suspense, lazy } from 'react';

import { stylesContainer } from './app.module.less';
import { stylesHeader, stylesImage } from './app.module.scss';

const LazyStrawberryIcon = lazy(() => import('./strawberry'));
const LazyDashboard = lazy(() => import('../dashboard/dashboard'));
export const App = (): React.ReactElement => (
    <div className={stylesContainer}>
        <div className={stylesHeader}>It works</div>
        <Suspense fallback={'loading...'}>
            <LazyDashboard />
        </Suspense>
    </div>
);

import { bootstrap } from 'angular2/platform/browser';


import { App } from './components/app/app';

bootstrap(App, []).catch((error: Error) => console.error(error));

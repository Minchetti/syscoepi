import { configure } from '@storybook/react';

const requires = require.context('../', true, /storybook\.js$/)
const loadStories = () => requires.keys().forEach(requires)

configure(loadStories, module);
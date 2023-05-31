import { defineConfig } from 'sanity';
import schemas from './sanity/schemas';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: 'o1pe3bm7',
    dataset: 'production',
    title: 'My Personal Website',
    apiVersion: '2023-05-30',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;
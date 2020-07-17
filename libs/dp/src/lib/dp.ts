import { createConfig, logWarn, ScullyConfig } from '@scullyio/scully';
// import * as whyLog from 'why-is-node-running';

export const id = 'dp';

logWarn(`
=====================================================
Scully dp server starting
=====================================================
`);

const projects = ['sample-blog', 'scully-docs'];

const configs = new Map<string, ScullyConfig>();

// Promise.all(
//   projects.map(async (pr) => {
//     console.log('pr', pr);
//     const config = await createConfig(pr);
//     configs.set(pr, config);
//   })
// ).then(r => {

//   process.exit(0)
// }).catch(e => console.log(e)

// logWarn('done');
// @ts-ignore
const handles = process._getActiveHandles();
console.dir(handles);

// whyLog();

import fs from 'fs';
import debug from './lib/debug';

const log = debug('main');
const data = JSON.parse(
  fs.readFileSync('src/data/hello-world.json', 'utf8').toString(),
);

async function main(): Promise<string[]> {
  console.debug(process.env.DEBUG);
  log(data);
  return data.hello;
}

export default main;

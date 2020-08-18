import chai from 'chai';
import fs from 'fs';
import filmsCrawler from '../src/crawler.js';

const expect = chai.expect;
const expectedData = JSON.parse(fs.readFileSync('./test/crawler-data.json'));

describe('Films Crawler', function() {
  it('should produce the expected result', async () => {
    const result = await filmsCrawler();

    expect(result).to.be.deep.equal(expectedData);
  }).timeout(60000);
});

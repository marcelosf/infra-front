import {Api} from '@/resources/Api/Api'

describe('Api class to access backend data', () => {

  const api = new Api('http://example.com');

  const api2 = new Api();

  it('Should return the configured base URL', () => {

    expect(api.baseUrl).to.equal('http://example.com');

  });

  it('Should return the configured timeout', () => {

    api.timeout = 1000;

    expect(api.timeout).to.equal(1000);

  });

  it('Should return the environment base url configuration', () => {

    expect(api2.baseUrl).to.equal(process.env.API_URL);

  });

});

// import {Api} from '@/resources/Api/Api';
// import {Jwt} from "@/resources/Jwt/Jwt";
// import {LocalStorage} from "@/resources/LocalStorage/LocalStorage";
//
// describe('Performs Jwt operations', () => {
//
//   const api = new Api('http://test.com');
//
//   const localStorage = new LocalStorage();
//
//   const jwt = new Jwt(api, localStorage);
//
//   it('Should return the stored token', () => {
//
//     let token = jwt.requestToken({login: 'test', password: 'test'});
//
//     expect(jwt.getStoredToken()).to.equal(token);
//
//   });
//
//   it('Should return a refreshed token', () => {
//
//     let token = jwt.getStoredToken();
//
//     !expect(jwt.requestToken()).to.be(token);
//
//   });
//
//   it('Should remove the stored token', () => {
//
//     jwt.removeToken();
//
//     expect(jwt.getStoredToken()).to.be('');
//
//   });
//
// });

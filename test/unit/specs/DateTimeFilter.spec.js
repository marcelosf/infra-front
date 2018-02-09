import {DateTimeFilter} from '@/filters/DateTimeFilter';

describe('Format Date and Time', () => {

  let formatted = DateTimeFilter.formatToBr('2018-02-08 17:19:00');

  it('Should return a formatted date and time', () => {

    expect(formatted).to.eql('08/02/2018 17:19');

  });

});

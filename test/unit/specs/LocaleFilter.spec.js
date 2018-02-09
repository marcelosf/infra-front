import {Filter} from '@/filters/Filter';

describe('Provide an array filter', () => {

  let array = [{id: 1, value: 1}, {id: 2, value: 1}, {id: 3, value: 4}];

  let filteredValues = Filter.byParameterKey(1, 'value', array);

  it('Should return the objects where value = 1', () => {

    expect(filteredValues).to.eql([{id: 1, value: 1}, {id: 2, value: 1}])

  });

});

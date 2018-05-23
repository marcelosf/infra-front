export class Filter {

  static byParameterKey (valueToCompare, parameter, array) {

    return array.filter((item) => {

      return item[parameter] === valueToCompare;

    });

  }

  static bySettingParameter (parameterValue, parameterToSet, query, array) {

    let newArray = [];

    array.forEach((item) => {

      if (item[query.parameter] === query.value) {

        item[parameterToSet] = parameterValue;

      }

      newArray.push(item);

    });

    return newArray;

  }

  static interactive (array, actions) {

    array.forEach((item) => {

      actions(item);

    });

  }

}

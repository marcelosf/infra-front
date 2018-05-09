import {Resource} from './Resource';

const HOME_API = '/';

export class HomeResource extends Resource {

  static list (actions, page, search, errors) {

    let searchParams = this.setSearch(search);

    this._getApi().get(HOME_API + '?page=' + page + (searchParams || '')).then((response) => {

      console.log(searchParams);

      actions(response.data.data);

    }).catch(errors);

  }

  static setSearch (search) {

    if (search) {

      let searchKeys = Object.keys(search);

      let searchParameters = '&search=';

      searchKeys.forEach((value) => {

        if (search[value]) {

          searchParameters = searchParameters + value + ':' + search[value] + ';';

        }

      });

      searchParameters = this.removeLastChar(searchParameters);

      searchParameters = this.setSearchJoin('and', searchKeys, searchParameters);

      return searchParameters;

    }

  }

  static removeLastChar (string) {

    let stringLength = string.length;

    return string.substr(0, (stringLength - 1));

  }

  static setSearchJoin (join, search, searchParameters) {

    if (search.length > 0) {

      return searchParameters + '&searchJoin=' + join;

    }

  }

}

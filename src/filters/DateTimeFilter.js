const TIMESTAMP_FORMAT = /(\d{4})-(\d{1,2})-(\d{1,2})\s(\d{2}):(\d{2}):(\d{2})/;

export class DateTimeFilter {

  static formatToBr (date) {

    if (!date) {

      return null;

    }

    return date.replace(TIMESTAMP_FORMAT, '$3/$2/$1 $4:$5');

  }

  static getCurrentTimestamp () {

    let now = new Date();

    return now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear();

  }

  static getDateFromTimestamp (date) {

    return date.replace(TIMESTAMP_FORMAT, '$1-$2-$3');

  }

}

export class DateTimeFilter {

  static formatToBr (date) {

    if (!date) {

      return null;

    }

    return date.replace(/(\d{4})-(\d{1,2})-(\d{1,2})\s(\d{2}):(\d{2}):(\d{2})/, '$3/$2/$1 $4:$5');

  }

  static getCurrentTimestamp () {

    let now = new Date();

    return now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear();

  }

}

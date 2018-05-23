export class TextFilters {

  static capitalize (value) {

    if (!value) return '';

    value = value.toString();

    return value.charAt(0).toUpperCase() + value.slice(1);

  }

  static valueOrText (value, text) {

    return value || text;

  }

}

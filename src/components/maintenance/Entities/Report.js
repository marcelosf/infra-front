export default {

  report: {

    content: '',

    order_id: null,

    user_id: null

  },

  rules: {

    content: [

      (value) => !!value || 'Please. Fill the Report field.'

    ],

    valid: false

  }

}

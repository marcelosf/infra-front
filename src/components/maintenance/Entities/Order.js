export default {

  service: {

    code: '',

    description: '',

    status: 'open',

    requester_id: '',

    answerable_id: '',

    local_id: ''

  },

  rules: {

    answerable_id: [

      (value) => !!value || 'Please, select an option.'

    ],

    description: [

      (value) => !!value || 'The description field can not be empty.'

    ],

    local_id: [

      (value) => value.length > 0 || 'Please, select an option.'

    ],

    valid: false

  }

}

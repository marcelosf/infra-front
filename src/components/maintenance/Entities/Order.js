export default {

  order: {

    id: null,

    code: '',

    created_at: '',

    updated_at: '',

    description: '',

    start_date: '',

    end_date: '',

    manager_id: null,

    observation: '',

    report: '',

    technical_id: null,

    service_id: null,

    technicians: [],

    epis: [],

    status: 'Test'

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

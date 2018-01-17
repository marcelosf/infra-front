<template>

    <v-container fluid>

        <v-layout row wrap>

            <h2>Serviços</h2>

        </v-layout>

        <services-grid :cards="services"></services-grid>

    </v-container>

</template>

<script>
    import CardGrid from '@/layouts/CardGrid';
    export default {

      data () {

        return {

          services: [

            {title: 'Audiovisual', media: '', link: ''},
            {title: 'Copa', media: '', link: ''},
            {title: 'LIme', media: '', link: ''},
            {
              title: 'Manutenção',
              media: 'https://cdn.evbuc.com/eventlogos/110429189/facilitiesmanagement2.jpg',
              link: 'maintenance.index',
              add: 'maintenance.service.create',
              list: 'maintenance.index'
            },
            {title: 'Patrimônio', media: '', link: ''},
            {title: 'Plotagem', media: '', link: ''},
            {title: 'Transporte', media: '', link: ''},
            {title: 'Acesso', media: '', link: ''},
            {title: 'Chaves', media: '', link: ''}
          ]

        }

      },

      components: {

        'services-grid': CardGrid

      }

    }

</script>
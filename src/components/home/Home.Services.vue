<template>

    <v-container fluid>

       <h1>Serviços</h1>

       <services-grid :cards="services"></services-grid>

    </v-container>

</template>

<script>
    import WorkspaceCard from '@/layouts/WorkspaceCard';
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
              link: 'maintenance.service',
              add: 'maintenance.service.create',
              list: 'maintenance.service',
              add_text: 'Add new Service',
              list_text: 'List Services'
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

        'workspace-card': WorkspaceCard,
        'services-grid': CardGrid

      }

    }

</script>
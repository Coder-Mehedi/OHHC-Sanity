export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'homeBanner',
      title: 'Banner',
      type: 'banner',
    },
    {
      name: 'minis',
      title: 'Minis Description',
      type: 'text',
    },
    {
      name: 'girls',
      title: 'Girls Description',
      type: 'text',
    },
    {
      name: 'boys',
      title: 'Boys Description',
      type: 'text',
    },
    {
      name: 'report',
      title: 'Match Report',
      type: 'text',
    },
  ],
};

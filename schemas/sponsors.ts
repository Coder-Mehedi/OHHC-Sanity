export default {
  name: 'sponsors',
  title: 'Our Sponsor’s',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'sponsors',
      type: 'array',
      of: [{ type: 'sponsor' }],
    },
  ],
};

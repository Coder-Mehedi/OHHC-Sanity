export default {
  name: 'about-us',
  title: 'About Us',
  type: 'document',
  __experimental_actions: ['create', 'update', 'delete', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};

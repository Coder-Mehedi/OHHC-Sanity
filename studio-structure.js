import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem) =>
  !['about-us', 'sponsors'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Us')
        .child(
          S.editor()
            .id('about-us')
            .schemaType('about-us')
            .documentId('about-us')
        ),
      S.listItem()
        .title('Our Sponsors')
        .child(
          S.editor()
            .id('sponsors')
            .schemaType('sponsors')
            .documentId('sponsors')
        ),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

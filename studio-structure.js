import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem) =>
  !['about-us', 'sponsors', 'home'].includes(listItem.getId());

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
      S.listItem()
        .title('Home')
        .child(S.editor().id('home').schemaType('home').documentId('home')),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

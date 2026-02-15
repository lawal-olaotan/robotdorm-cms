import type {StructureBuilder, StructureResolver} from 'sanity/structure'

export const blogStructure = (S: StructureBuilder) =>
  S.list()
    .title('Blog')
    .items([
          S.documentTypeListItem('post').title('Posts'),
          S.documentTypeListItem('category').title('Categories'),
          S.divider(),
          ...S.documentTypeListItems().filter(
            (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
          ),
    ])

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...(blogStructure(S).getItems() ?? []),
      S.divider()
    ])



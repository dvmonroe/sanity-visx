import {StructureBuilder, ListItemBuilder} from 'sanity/structure'
import { 
  ChartUpwardIcon,
  EyeOpenIcon,
  EditIcon,
  BarChartIcon,
} from '../icons'
import { BarChartPreview } from '../components/BarChartPreview'
import { ChartType } from '../types'

const typeDict: Record<ChartType, { title: string, icon: any, preview?: any }> = {
  'barChart': {
    title: 'Bar Charts',
    icon: BarChartIcon,
    preview: BarChartPreview,
  },
};

const createListItem = (S: StructureBuilder, type: string, title: string, icon: any, previewComponent?: any) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.documentTypeList(`visx.${type}`)
        .title(`All ${title}`)
        .child((documentId: string) =>
          S.document()
            .documentId(documentId)
            .schemaType(`visx.${type}`)
            .views([
              S.view.form().icon(EditIcon),
              ...(previewComponent ? [S.view.component(previewComponent).title('Preview').icon(EyeOpenIcon)] : []),
            ]),
        ),
    );

export const visxStructure = (S: StructureBuilder, types: ChartType[] = []) =>
  S.listItem()
    .title('Visx Charts')
    .icon(ChartUpwardIcon)
    .child(
      S.list()
        .title('Charts')
        .items(
          types.map(type => {
            const item = typeDict[type];
            if (item) {
              return createListItem(S, type, item.title, item.icon, item.preview);
            }
            return null;
          }).filter(Boolean) as ListItemBuilder[]
        ),
    )

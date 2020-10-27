import { {{name}}, Submit{{Name}}ResponseAction } from '.'

export const updateList = (
    {{name}}sList: {{name}}[],
    action: Submit{{Name}}ResponseAction
): {{name}}[] =>
    {{name}}sList.map((item) =>
        item.id === action.{{name}}.id ? action.{{name}} : item
    )

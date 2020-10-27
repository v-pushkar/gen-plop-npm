import { template, SubmitTemplateResponseAction } from '.'

export const updateList = (
    templatesList: template[],
    action: SubmitTemplateResponseAction
): template[] =>
    templatesList.map((item) =>
        item.id === action.template.id ? action.template : item
    )

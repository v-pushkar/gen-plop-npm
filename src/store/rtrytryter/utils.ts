import { rtrytryter, SubmitRtrytryterResponseAction } from '.'

export const updateList = (
    rtrytrytersList: rtrytryter[],
    action: SubmitRtrytryterResponseAction
): rtrytryter[] =>
    rtrytrytersList.map((item) =>
        item.id === action.rtrytryter.id ? action.rtrytryter : item
    )

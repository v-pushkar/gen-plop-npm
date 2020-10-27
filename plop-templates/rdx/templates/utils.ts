import { <%= name %>, Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction } from '.'

export const updateList = (
    <%= name %>sList: <%= name %>[],
    action: Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction
): <%= name %>[] =>
    <%= name %>sList.map((item) =>
        item.id === action.<%= name %>.id ? action.<%= name %> : item
    )

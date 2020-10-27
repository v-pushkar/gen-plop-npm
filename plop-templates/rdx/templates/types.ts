import { Action } from 'redux'

export enum ActionTypes {
    GET_<%= name.toUpperCase() %>S_REQUEST = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_<%= name.toUpperCase() %>S_REQUEST',
    GET_<%= name.toUpperCase() %>S_RESPONSE = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_<%= name.toUpperCase() %>S_RESPONSE',
    SET_IS_FETCHING = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/SET_IS_FETCHING',
    GET_<%= name.toUpperCase() %>_DETAILS_REQUEST = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_<%= name.toUpperCase() %>_DETAILS_REQUEST',
    GET_<%= name.toUpperCase() %>S_DETAILS_RESPONSE = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_<%= name.toUpperCase() %>S_DETAILS_RESPONSE',
    SET_IS_FETCHING_DETAILS = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/SET_IS_FETCHING_DETAILS',
    GET_PREDEFINED_VALUES_REQUEST = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_PREDEFINED_VALUES_REQUEST',
    GET_PREDEFINED_VALUES_RESPONSE = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_PREDEFINED_VALUES_RESPONSE',
    GET_<%= name.toUpperCase() %>_DRAFT_REQUEST = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_<%= name.toUpperCase() %>_DRAFT_REQUEST',
    GET_<%= name.toUpperCase() %>_DRAFT_RESPONSE = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_<%= name.toUpperCase() %>_DRAFT_RESPONSE',
    ADD_<%= name.toUpperCase() %>_REQUEST = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/ADD_<%= name.toUpperCase() %>_REQUEST',
    EDIT_<%= name.toUpperCase() %>_REQUEST = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/EDIT_<%= name.toUpperCase() %>_REQUEST',
    ADD_<%= name.toUpperCase() %>_RESPONSE = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/ADD_<%= name.toUpperCase() %>_RESPONSE',
    EDIT_<%= name.toUpperCase() %>_RESPONSE = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/EDIT_<%= name.toUpperCase() %>_RESPONSE',
    SET_IS_ERROR_FETCHING_DETAILS = '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/SET_IS_ERROR_FETCHING_DETAILS'
}

type ppe = {
    id: number
    contentPath: string
}

export type notice = {
    id: number
    content: string
    title: string
    global: boolean
    mandatory: boolean
}

export type motivator = {
    id: number
    value: string
    causes: cause[]
}

export type cause = {
    id: number
    value: string
}

export type category = {
    id: number | null
    value: string
}

export type picture = {
    id?: number
    path: string
    safe: boolean
}

export type activity = {
    safeBehaviorDescription: string | null
    unsafeBehaviorDescription: string | null
    category: category
    pictures?: picture[]
    activityDescription?: string
    motivators?: motivator[]
    id?: number | null
    displayOrder?: number
}

export type bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data = {
    physicalPlaces: string
    ppes: ppe[]
    notices: notice[]
    activities: activity[]
    activeCareActivities?: activity[]
}

export type <%= name %> = {
    id: number
    productionCenterId: string
    publishDate: Date
    inUse: boolean
    lastEdition: Date
    author: string
    status: string
    name: string
}

export type <%= name %>Details = <%= name %> & {
    bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data: bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data
}

export type <%= name %>Draft = {
    region: string
    area: string
    bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data: bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data
    inUse: boolean
}

export type predefinedValues = {
    physicalPlaces: string[]
    ppes: ppe[]
    localNotices: notice[]
    globalNotices: notice[]
    categories: category[]
}

export type <%= name.charAt(0).toUpperCase()+name.slice(1) %>sState = {
    readonly <%= name %>sList: <%= name %>[]
    readonly isFetching: boolean
    readonly <%= name %>Details: <%= name %>Details | null
    readonly isFetchingDetails: boolean
    readonly predefinedValues: predefinedValues | null
    readonly <%= name %>Draft: <%= name %>Details | null
    readonly isErrorFetchingDetails: boolean
}

export interface Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction extends Action {
    <%= name %>sList: <%= name %>[]
}

export interface SetIsFetchingAction extends Action {
    isFetching: boolean
}

export interface SetIsErrorFetchingAction extends Action {
    isError: boolean
}

export interface Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequestAction extends Action {
    id: number
}

export interface Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction extends Action {
    details: <%= name %>Details | null
}

export interface GetPredefinedValuesResponseAction extends Action {
    values: predefinedValues | null
}

export interface Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction extends Action {
    id: number
}

export interface Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction extends Action {
    draft: <%= name %>Details | null
}

export interface Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction extends Action {
    data: <%= name %>Draft
    publish: boolean
}

export interface Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction extends Action {
    data: <%= name %>Details
    publish: boolean
}

export interface Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction extends Action {
    <%= name %>: <%= name %>Details
}

import {CHANGE_SEARCH_FIELD} from './types'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
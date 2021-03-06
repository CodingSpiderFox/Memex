import { createSelector } from 'reselect'

export const searchFilters = (state) => state.searchFilters

export const tagFilter = createSelector(
    searchFilters,
    (state) => state.showTagFilter,
)

export const hashtagFilter = createSelector(
    searchFilters,
    (state) => state.showHashtagFilter,
)

export const domainFilter = createSelector(
    searchFilters,
    (state) => state.showDomainFilter,
)

export const datesFilter = createSelector(
    searchFilters,
    (state) => state.showDatesFilter,
)

export const isMobileListFiltered = createSelector(
    searchFilters,
    (state) => state.isMobileListFiltered,
)

export const filterTypes = createSelector(
    searchFilters,
    (state) => state.showFilterTypes,
)

export const userFilter = createSelector(
    searchFilters,
    (state) => state.showUserFilter,
)

export const tags = createSelector(searchFilters, (state) => state.tags)

export const tagsExc = createSelector(searchFilters, (state) => state.tagsExc)

export const hashtagsInc = createSelector(
    searchFilters,
    (state) => state.hashtagsInc,
)

export const hashtagsExc = createSelector(
    searchFilters,
    (state) => state.hashtagsExc,
)

export const suggestedTags = createSelector(
    searchFilters,
    (state) => state.suggestedTags,
)
export const suggestedHashtags = createSelector(
    searchFilters,
    (state) => state.suggestedHashtags,
)
export const suggestedDomains = createSelector(
    searchFilters,
    (state) => state.suggestedDomains,
)
export const suggestedUsers = createSelector(
    searchFilters,
    (state) => state.suggestedUsers,
)
export const domainsInc = createSelector(
    searchFilters,
    (state) => state.domainsInc,
)
export const domainsExc = createSelector(
    searchFilters,
    (state) => state.domainsExc,
)
export const usersInc = createSelector(searchFilters, (state) => state.usersInc)
export const usersExc = createSelector(searchFilters, (state) => state.usersExc)

export const listIdFilter = createSelector(
    searchFilters,
    (state) => state.filteredListId,
)
export const listNameFilter = createSelector(
    searchFilters,
    (state) => state.filteredListName,
)

// Lists for now is just id of one list
export const listFilterParam = createSelector(listIdFilter, (state) =>
    state == null ? [] : [state],
)
export const displayDomains = createSelector(
    domainsInc,
    domainsExc,
    (inc, exc) => [
        ...inc.map((value) => ({ value, isExclusive: false })),
        ...exc.map((value) => ({ value, isExclusive: true })),
    ],
)

export const displayUsers = createSelector(usersInc, usersExc, (inc, exc) => [
    ...inc.map((value) => ({ value, isExclusive: false })),
    ...exc.map((value) => ({ value, isExclusive: true })),
])

export const displayTags = createSelector(tags, tagsExc, (inc, exc) => [
    ...inc.map((value) => ({ value, isExclusive: false })),
    ...exc.map((value) => ({ value, isExclusive: true })),
])

export const displayHashtags = createSelector(
    hashtagsInc,
    hashtagsExc,
    (inc, exc) => [
        ...inc.map((value) => ({ value, isExclusive: false })),
        ...exc.map((value) => ({ value, isExclusive: true })),
    ],
)

export const onlyBookmarks = createSelector(
    searchFilters,
    (state) => state.onlyBookmarks,
)

export const showFilterBar = createSelector(
    searchFilters,
    (state) => state.showFilterBar,
)

/**
 * Selector to toggle clear filter button
 * As new filters are added, corersponding changes need to made to this function
 */
export const showClearFiltersBtn = createSelector(
    onlyBookmarks,
    tags,
    tagsExc,
    domainsInc,
    domainsExc,
    usersInc,
    usersExc,
    hashtagsInc,
    hashtagsExc,
    (
        onlyBookmarks,
        tags,
        tagsExc,
        domainsInc,
        domainsExc,
        usersInc,
        usersExc,
        hashtagsInc,
        hashtagsExc,
    ) =>
        onlyBookmarks ||
        !!tags.length ||
        !!tagsExc.length ||
        !!domainsInc.length ||
        !!domainsExc.length ||
        !!usersInc.length ||
        !!usersExc.length ||
        !!hashtagsInc.length ||
        !!hashtagsExc.length,
)

export const listFilterActive = createSelector(
    listIdFilter,
    (filteredListId) => filteredListId != null,
)

export const contentType = createSelector(
    searchFilters,
    (state) => state.contentTypes,
)

export const websitesFilter = createSelector(
    contentType,
    (state) => state.pages,
)
export const highlightsFilter = createSelector(
    contentType,
    (state) => state.highlights,
)
export const notesFilter = createSelector(contentType, (state) => state.notes)

/**
 * Selector for the annotation content type filter.
 * Is true if both highlights and notes filter is selected.
 */
export const annotationsFilter = createSelector(
    notesFilter,
    highlightsFilter,
    (notes, highlights) => notes && highlights,
)

import { EditorView } from '@codemirror/view'
import { atom } from 'jotai'
import { GlobalState, Headers, Tab } from './types'
import { createNewDefaultTab } from './utils'

const defaultConfig = {
  tabs: [createNewDefaultTab()],
  headers: {},
}

export const getInitialState = (): GlobalState => {
  const config = localStorage.getItem('trpc-playground-config')

  if (config !== null) {
    try {
      return JSON.parse(config) || defaultConfig
      // eslint-disable-next-line no-empty
    } catch {}
  }
  return defaultConfig
}

const stateAtom = atom(getInitialState())

export const headersAtom = atom(
  (get) => get(stateAtom).headers,
  (get, set, updateHeaders: (headers: Headers) => Headers) => {
    const oldValue = get(stateAtom)
    const newValue = { ...oldValue, headers: updateHeaders(oldValue.headers) }

    set(stateAtom, newValue)
    localStorage.setItem('trpc-playground-config', JSON.stringify(newValue))
  },
)

export const tabsAtom = atom(
  (get) => get(stateAtom).tabs,
  (get, set, updateTabs: (tabs: Tab[]) => Tab[]) => {
    const oldValue = get(stateAtom)
    const newValue = { ...oldValue, tabs: updateTabs(oldValue.tabs) }

    set(stateAtom, newValue)
    localStorage.setItem('trpc-playground-config', JSON.stringify(newValue))
  },
)

export const previousTabIdAtom = atom('0')
const currentTabIdAtom = atom('0')

export const updateCurrentTabIdAtom = atom((get) => get(currentTabIdAtom), (get, set, update: string) => {
  set(previousTabIdAtom, get(currentTabIdAtom))
  set(currentTabIdAtom, update)
})

export const currentTabAtom = atom((get) => {
  return get(tabsAtom).find((tab) => tab.id === get(currentTabIdAtom))!
})

export const previousTabAtom = atom((get) => {
  return get(tabsAtom).find((tab) => tab.id === get(previousTabIdAtom))
})

export const currentTabIndexAtom = atom((get) => {
  return get(tabsAtom).findIndex((tab) => tab.id === get(currentTabIdAtom))
})

export const queryBuilderOpened = atom(false)
export const editorAtom = atom<EditorView | null>(null)

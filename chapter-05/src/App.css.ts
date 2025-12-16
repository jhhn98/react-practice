import { style } from '@vanilla-extract/css'

export const container = style({
    padding: '1rem'
})
export const button = style({
    background: 'transparent',
    borderRadius: '3px',
    border: 'none',
    color: '#bf4f74',
    padding: '0.25em 1em',
    ':hover': {
        backgroundColor: '#bfbfbf',
        color: '#333'
    }
})
export const active = style({
    backgroundColor: '#bf4f74',
    color: '#fff'
})
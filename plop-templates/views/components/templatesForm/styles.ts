import { makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
    form: {
        height: 'calc(100% - 7rem)'
    },
    contentWrapper: {
        height: '100%',
        overflowY: 'auto',
        padding: '1rem 0',
        '&::-webkit-scrollbar': {
            width: '0.25rem'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 0.25rem rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 0.25rem rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)'
        }
    },
    input: {
        padding: '0.516rem 1.083rem 0.495rem 0.5rem',
        backgroundColor: theme.brandColor?.white
    },
    marginLeft: {
        marginLeft: '20px'
    },
    error: {
        color: 'red'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    titleText: {
        fontSize: '1rem',
        color: theme.brandColor?.black,
        fontWeight: 'bold'
    },
    marginBottom: {
        marginBottom: '1rem'
    }
}))

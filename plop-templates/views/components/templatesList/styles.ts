import { makeStyles, Theme } from '@material-ui/core'

export const getColumnsStyles = makeStyles((theme: Theme) => ({
    header: { padding: '0 0.666rem', fontWeight: 'bold' },
    cell: { padding: '0.666rem' },
    ellipsisVIcon: {
        cursor: 'pointer',
        color: theme.brandColor?.blueDarkSecondary,
        fontSize: '1rem',
        marginRight: '10px'
    }
}))

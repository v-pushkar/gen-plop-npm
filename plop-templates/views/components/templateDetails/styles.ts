import { makeStyles, Theme } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
    ellipsisVIcon: {
        cursor: 'pointer',
        color: theme.brandColor?.blueDarkSecondary,
        transform: 'scale(.6)',
        marginLeft: '5px'
    },
    textRow: {
        marginBottom: '1rem',
        display: 'flex',
        flexWrap: 'wrap'
    },
    textTitle: {
        fontSize: '1rem',
        color: theme.brandColor?.greyDarkPrimary,
        fontWeight: 'bold',
        marginRight: '6px'
    },
    textValue: {
        fontSize: '1rem',
        color: theme.brandColor?.black,
        fontWeight: 'bold'
    },
    activitiesTextRow: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '1rem'
    },
    activitiesHeader: {
        marginBottom: '1rem'
    },
    activitiesTextTitle: {
        color: theme.brandColor?.blackFourth,
        fontSize: '1rem',
        fontWeight: 'bold',
        marginRight: '6px'
    },
    activitiesTextValue: {
        color: theme.brandColor?.greyDarkPrimary,
        fontSize: '1rem',
        fontWeight: 'bold'
    },
    imageWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        border: `2px solid ${theme.brandColor?.greyDarkSeventh}`,
        borderRadius: '5px',
        opacity: '0.34',
        minHeight: '100px',
        width: '90%',
        marginBottom: '18px'
    },
    activityWrapper: {
        marginBottom: '1rem'
    }
}))

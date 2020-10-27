import React from 'react'
import { activity } from 'store'
import { useStyles } from './styles'
import clsx from 'clsx'

type Props = {
    activity: activity
}

export const ActivityItem: React.FC<Props> = ({ activity }) => {
    const classes = useStyles()
    const {
        category,
        safeBehaviorDescription,
        unsafeBehaviorDescription,
        id
    } = activity
    return (
        <div
            key={id}
            className={classes.activityWrapper}
            data-testid="activity-wrapper"
        >
            <p
                className={clsx([
                    classes.activitiesTextTitle,
                    classes.activitiesHeader
                ])}
                data-testid="activity-header"
            >
                {category?.value}
            </p>
            <div className={classes.activitiesTextRow}>
                <p className={classes.activitiesTextTitle}>
                    Description of positive behaviour:
                </p>
                <p className={classes.activitiesTextValue}>
                    {safeBehaviorDescription}
                </p>
            </div>
            <div className={classes.imageWrapper}>
                <img className={classes.image} alt="Good behavior" />
            </div>
            <div className={classes.activitiesTextRow}>
                <p className={classes.activitiesTextTitle}>
                    Description of negative behaviour:
                </p>
                <p className={classes.activitiesTextValue}>
                    {unsafeBehaviorDescription}
                </p>
            </div>
            <div className={classes.imageWrapper}>
                <img className={classes.image} alt="Bad behavior" />
            </div>
        </div>
    )
}

import React from 'react'
import { ActivityItem } from './ActivityItem'
import { render } from '@testing-library/react'
import { activity } from 'store'
import { mockRtyryryDetails } from 'store/ducks/Rtyryrys/mockedData'

const mockedActivity: activity = JSON.parse(
    JSON.stringify(mockRtyryryDetails.bosRtyryryData.activities[0])
)

describe('ActivityItem component unit test', () => {
    it('should test if renders without crashing and displays wrapper', () => {
        const { queryByTestId } = render(
            <ActivityItem activity={mockedActivity} />
        )
        expect(queryByTestId('activity-wrapper')).toBeInTheDocument()
    })

    it('should test if has proper text content', () => {
        const { queryByTestId } = render(
            <ActivityItem activity={mockedActivity} />
        )
        expect(queryByTestId('activity-header')).toHaveTextContent('activity 2')
    })
})

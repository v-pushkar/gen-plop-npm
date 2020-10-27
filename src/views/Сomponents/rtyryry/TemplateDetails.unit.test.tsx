import React from 'react'
import { TemplateDetails } from './TemplateDetails'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { templateDetails } from 'store'
import { mockTemplateDetails } from 'store/ducks/Templates/mockedData'

const onClose = jest.fn()
const getTemplateDetails = jest.fn()
const cleanTemplateDetails = jest.fn()
const mockedDetails: templateDetails = mockTemplateDetails

describe('TemplateDetails component unit test', () => {
    it('should test if renders without crashing and displays wrapper', () => {
        const { queryByTestId, getByTestId } = render(
            <TemplateDetails
                onClose={onClose}
                getTemplateDetails={getTemplateDetails}
                cleanTemplateDetails={cleanTemplateDetails}
                id={1}
                isFetchingDetails
                isErrorFetchingDetails={false}
                templateDetails={mockedDetails}
            />
        )
        expect(queryByTestId('template-details')).toBeInTheDocument()
        fireEvent.click(getByTestId('details-close'))
        expect(onClose).toHaveBeenCalled()
    })

    it('should test if has proper text content', () => {
        const { getAllByTestId } = render(
            <TemplateDetails
                onClose={onClose}
                getTemplateDetails={getTemplateDetails}
                cleanTemplateDetails={cleanTemplateDetails}
                id={1}
                isFetchingDetails={false}
                isErrorFetchingDetails={false}
                templateDetails={mockedDetails}
            />
        )
        expect(getAllByTestId('activity-header')[0]).toHaveTextContent(
            'Sample activity 2'
        )
    })
})

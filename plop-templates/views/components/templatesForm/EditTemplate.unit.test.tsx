import React from 'react'
import { render } from '@testing-library/react'
import { EditTemplate } from './EditTemplate'
import {
    mockTemplateDetails,
    mockTemplatePredefinedValues
} from 'store/ducks/Templates/mockedData'

const onClose = jest.fn()
const getTemplateDraft = jest.fn()
const cleanTemplateDraft = jest.fn()
const editTemplate = jest.fn()
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}))

describe('EditTemplate component unit test', () => {
    it('should test if renders without crashing and displays wrapper', () => {
        const { queryByTestId } = render(
            <EditTemplate
                onClose={onClose}
                getTemplateDraft={getTemplateDraft}
                cleanTemplateDraft={cleanTemplateDraft}
                editTemplate={editTemplate}
                predefinedValues={null}
                isFetchingDetails={true}
                id={1}
                templateDraft={mockTemplateDetails}
            />
        )
        expect(queryByTestId('edit-template')).toBeInTheDocument()
    })

    it('should fetch predefinedValues on init and show spinner', () => {
        const { queryByTestId } = render(
            <EditTemplate
                onClose={onClose}
                getTemplateDraft={getTemplateDraft}
                cleanTemplateDraft={cleanTemplateDraft}
                editTemplate={editTemplate}
                predefinedValues={null}
                isFetchingDetails={true}
                id={1}
                templateDraft={mockTemplateDetails}
            />
        )
        expect(getTemplateDraft).toHaveBeenCalled()
        expect(queryByTestId('loading-details')).toBeInTheDocument()
    })

    it('should render TemplatesForm', () => {
        const { queryByTestId } = render(
            <EditTemplate
                onClose={onClose}
                getTemplateDraft={getTemplateDraft}
                cleanTemplateDraft={cleanTemplateDraft}
                editTemplate={editTemplate}
                predefinedValues={mockTemplatePredefinedValues}
                isFetchingDetails={false}
                id={1}
                templateDraft={mockTemplateDetails}
            />
        )

        expect(queryByTestId('templates-form')).toBeInTheDocument()
    })
})

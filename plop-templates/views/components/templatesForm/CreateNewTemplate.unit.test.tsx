import React from 'react'
import { render } from '@testing-library/react'
import { CreateNewTemplate } from './CreateNewTemplate'
import { mockTemplatePredefinedValues } from 'store/ducks/Templates/mockedData'

const onClose = jest.fn()
const getPredefinedValues = jest.fn()
const cleanPredefinedValues = jest.fn()
const addTemplate = jest.fn()
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}))

describe('CreateNewTemplate component unit test', () => {
    it('should test if renders without crashing and displays wrapper', () => {
        const { queryByTestId } = render(
            <CreateNewTemplate
                onClose={onClose}
                getPredefinedValues={getPredefinedValues}
                cleanPredefinedValues={cleanPredefinedValues}
                addTemplate={addTemplate}
                predefinedValues={null}
                isFetchingDetails={true}
            />
        )
        expect(queryByTestId('create-new-template')).toBeInTheDocument()
    })

    it('should fetch predefinedValues on init and show spinner', () => {
        const { queryByTestId } = render(
            <CreateNewTemplate
                onClose={onClose}
                getPredefinedValues={getPredefinedValues}
                cleanPredefinedValues={cleanPredefinedValues}
                addTemplate={addTemplate}
                predefinedValues={null}
                isFetchingDetails={true}
            />
        )
        expect(getPredefinedValues).toHaveBeenCalled()
        expect(queryByTestId('loading-details')).toBeInTheDocument()
    })

    it('should render TemplatesForm', () => {
        const { queryByTestId } = render(
            <CreateNewTemplate
                onClose={onClose}
                getPredefinedValues={getPredefinedValues}
                cleanPredefinedValues={cleanPredefinedValues}
                addTemplate={addTemplate}
                predefinedValues={mockTemplatePredefinedValues}
                isFetchingDetails={false}
            />
        )
        expect(queryByTestId('templates-form')).toBeInTheDocument()
    })
})

import React from 'react'
import { render } from '@testing-library/react'
import { CreateNew{{Name}} } from './CreateNew{{Name}}'
import { mock{{Name}}PredefinedValues } from 'store/ducks/{{Name}}s/mockedData'

const onClose = jest.fn()
const getPredefinedValues = jest.fn()
const cleanPredefinedValues = jest.fn()
const add{{Name}} = jest.fn()
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}))

describe('CreateNew{{Name}} component unit test', () => {
    it('should test if renders without crashing and displays wrapper', () => {
        const { queryByTestId } = render(
            <CreateNew{{Name}}
                onClose={onClose}
                getPredefinedValues={getPredefinedValues}
                cleanPredefinedValues={cleanPredefinedValues}
                add{{Name}}={add{{Name}} }
                predefinedValues={null}
                isFetchingDetails={true}
            />
        )
        expect(queryByTestId('create-new-{{name}}')).toBeInTheDocument()
    })

    it('should fetch predefinedValues on init and show spinner', () => {
        const { queryByTestId } = render(
            <CreateNew{{Name}}
                onClose={onClose}
                getPredefinedValues={getPredefinedValues}
                cleanPredefinedValues={cleanPredefinedValues}
                add{{Name}}={add{{Name}} }
                predefinedValues={null}
                isFetchingDetails={true}
            />
        )
        expect(getPredefinedValues).toHaveBeenCalled()
        expect(queryByTestId('loading-details')).toBeInTheDocument()
    })

    it('should render {{Name}}sForm', () => {
        const { queryByTestId } = render(
            <CreateNew{{Name}}
                onClose={onClose}
                getPredefinedValues={getPredefinedValues}
                cleanPredefinedValues={cleanPredefinedValues}
                add{{Name}}={add{{Name}} }
                predefinedValues={mock{{Name}}PredefinedValues}
                isFetchingDetails={false}
            />
        )
        expect(queryByTestId('{{name}}s-form')).toBeInTheDocument()
    })
})

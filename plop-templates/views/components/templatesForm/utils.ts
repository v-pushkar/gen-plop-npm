import {
    bosTemplateData,
    predefinedValues,
    notice,
    picture,
    category,
    activity
} from 'store'
import { formValues } from './TemplatesForm'

export const getinitialValues = (
    initialValuesPassed: bosTemplateData | undefined
): formValues => ({
    publish: null,
    department: initialValuesPassed?.physicalPlaces || '',
    ppes: initialValuesPassed?.ppes.map((item) => item.id) || [],
    globalNotices:
        initialValuesPassed?.notices
            .filter((item) => item.global === true)
            .map((item) => item.id) || [],
    localNotices:
        initialValuesPassed?.notices
            .filter((item) => item.global === false)
            .map((item) => item.id) || [],
    newLocalNotices: [],
    activities: initialValuesPassed?.activities.map((item) => ({
        id: `${item?.category?.id}` || '',
        generalDesc: item.activityDescription || '',
        descGood: item.safeBehaviorDescription || '',
        descBad: item.unsafeBehaviorDescription || '',
        pictureGood:
            item.pictures?.filter((el) => el.safe === true)[0]?.path || '',
        pictureBad:
            item.pictures?.filter((el) => el.safe === false)[0]?.path || ''
    })) || [
        {
            id: '',
            generalDesc: '',
            descGood: '',
            descBad: '',
            pictureGood: '',
            pictureBad: ''
        },
        {
            id: '',
            generalDesc: '',
            descGood: '',
            descBad: '',
            pictureGood: '',
            pictureBad: ''
        },
        {
            id: '',
            generalDesc: '',
            descGood: '',
            descBad: '',
            pictureGood: '',
            pictureBad: ''
        }
    ]
})

export const createTemplateData = (
    values: formValues,
    predefinedValues: predefinedValues
): bosTemplateData => {
    const { department, ppes, globalNotices, localNotices, activities } = values

    const tmpActivities: activity[] = activities.map((item, index) => {
        const currentCategory:
            | category
            | undefined = predefinedValues.categories.find(
            (el) => el.id === parseInt(item.id!)
        )
        if (currentCategory) {
            let tmpPictures: picture[] = []

            item.pictureGood &&
                tmpPictures.push({
                    path: item.pictureGood,
                    safe: true
                })

            item.pictureBad &&
                tmpPictures.push({
                    path: item.pictureBad,
                    safe: false
                })

            return {
                category: currentCategory,
                activityDescription: item.generalDesc || '',
                safeBehaviorDescription: item.descGood || '',
                unsafeBehaviorDescription: item.descBad || '',
                pictures: [...tmpPictures],
                displayOrder: index
            }
        } else {
            return {
                safeBehaviorDescription: null,
                unsafeBehaviorDescription: null,
                activityDescription: '',
                category: {
                    id: null,
                    value: ''
                },
                pictures: [],
                displayOrder: index
            }
        }
    })

    const tmpGlobalNotices: notice[] = predefinedValues.globalNotices.filter(
        (item) => globalNotices.map(Number).includes(item.id)
    )
    const tmpLocalNotices: notice[] = predefinedValues.localNotices.filter(
        (item) => localNotices.map(Number).includes(item.id)
    )

    const data: bosTemplateData = {
        physicalPlaces: department,
        ppes: predefinedValues.ppes.filter((item) =>
            ppes.map(Number).includes(item.id)
        ),
        notices: [...tmpGlobalNotices, ...tmpLocalNotices],
        activities: tmpActivities
    }

    return data
}

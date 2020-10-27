import { <%= name %>, <%= name %>Details, predefinedValues } from './types'

export const mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>sList: <%= name %>[] = [
    {
        id: 1,
        publishDate: new Date(),
        inUse: true,
        lastEdition: new Date(),
        author: 'author1',
        status: Math.random() < 0.5 ? 'Test' : 'Published',
        productionCenterId: '1',
        name: 'name'
    },
    {
        id: 2,
        publishDate: new Date(),
        inUse: true,
        lastEdition: new Date(),
        author: 'author2',
        status: Math.random() < 0.5 ? 'Test' : 'Published',
        productionCenterId: '1',
        name: 'name'
    },
    {
        id: 3,
        publishDate: new Date(),
        inUse: true,
        lastEdition: new Date(),
        author: 'author3',
        status: Math.random() < 0.5 ? 'Test' : 'Published',
        productionCenterId: '1',
        name: 'name'
    },
    {
        id: 4,
        publishDate: new Date(),
        inUse: true,
        lastEdition: new Date(),
        author: 'author4',
        status: Math.random() < 0.5 ? 'Test' : 'Published',
        productionCenterId: '1',
        name: 'name'
    }
]

export const mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details: <%= name %>Details = {
    id: 1,
    productionCenterId: '1',
    name: 'name',
    status: Math.random() < 0.5 ? 'Test' : 'Published',
    bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data: {
        physicalPlaces: 'place1',
        ppes: [
            {
                id: 1,
                contentPath: 'sample_ppe1.bmp'
            },
            {
                id: 2,
                contentPath: 'sample_ppe2.bmp'
            }
        ],
        notices: [
            {
                content:
                    'Please respect people’s privacy. It is forbidden to insert any personal data. For personal data it is meant any information concerning an identified or identifiable natural person.',
                global: true,
                id: 1,
                mandatory: true,
                title: 'Privacy notice'
            },
            {
                content:
                    'Please respect people’s privacy. It is forbidden to insert any personal data. For personal data it is meant any information concerning an identified or identifiable natural person.',
                global: true,
                id: 2,
                mandatory: true,
                title: 'Privacy notice'
            }
        ],
        activities: [
            {
                id: 2,
                safeBehaviorDescription: 'Sample good behavior description 2',
                unsafeBehaviorDescription: 'Sample bad behavior description 2',
                motivators: [
                    {
                        id: 5,
                        value:
                            'missing knowledge (the person need more knowledge/skills to perform the job or to respond to conditions)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 2,
                                value:
                                    'Sample root cause 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 4,
                                value:
                                    'Sample root cause 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 10,
                        value:
                            'issue raised but no fixed (problem is well known but actions are ineffective or not taken)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 2,
                                value:
                                    'Sample root cause 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 4,
                                value:
                                    'Sample root cause 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 7,
                        value:
                            'hard work conditions (repetitive motion- uncomfortable position - vibration - heavy lifting)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 9,
                        value:
                            'hurry or shortcut (rules - policies - procedures - administrative controls are bypassed or task performed in a hurry)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    }
                ],
                category: {
                    id: 3,
                    value: 'Sample activity 2'
                },
                pictures: [
                    { id: 9, path: 'good_behavior_picture.bmp', safe: true }
                ]
            },
            {
                id: 3,
                safeBehaviorDescription: 'Sample good behavior description 3',
                unsafeBehaviorDescription: 'Sample bad behavior description 3',
                motivators: [
                    {
                        id: 5,
                        value:
                            'missing knowledge (the person need more knowledge/skills to perform the job or to respond to conditions)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 10,
                        value:
                            'issue raised but no fixed (problem is well known but actions are ineffective or not taken)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    }
                ],
                category: {
                    id: 3,
                    value: 'Sample activity category 3'
                },
                pictures: [
                    { id: 9, path: 'good_behavior_picture.bmp', safe: true }
                ]
            },
            {
                id: 1,
                safeBehaviorDescription: 'Sample good behavior description 1',
                unsafeBehaviorDescription: 'Sample bad behavior description 1',
                motivators: [
                    {
                        id: 5,
                        value:
                            'missing knowledge (the person need more knowledge/skills to perform the job or to respond to conditions)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 10,
                        value:
                            'issue raised but no fixed (problem is well known but actions are ineffective or not taken)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 7,
                        value:
                            'hard work conditions (repetitive motion- uncomfortable position - vibration - heavy lifting)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    }
                ],
                category: {
                    id: 3,
                    value: 'Sample activity category 3'
                },
                pictures: [
                    { id: 9, path: 'good_behavior_picture.bmp', safe: true }
                ]
            }
        ],
        activeCareActivities: [
            {
                id: 5,
                safeBehaviorDescription: 'Sample good behavior description 5',
                unsafeBehaviorDescription: 'Sample bad behavior description 5',
                motivators: [
                    {
                        id: 5,
                        value:
                            'missing knowledge (the person need more knowledge/skills to perform the job or to respond to conditions)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 10,
                        value:
                            'issue raised but no fixed (problem is well known but actions are ineffective or not taken)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 7,
                        value:
                            'hard work conditions (repetitive motion- uncomfortable position - vibration - heavy lifting)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    }
                ],
                category: {
                    id: 3,
                    value: 'Sample activity category 3'
                },
                pictures: [
                    { id: 9, path: 'good_behavior_picture.bmp', safe: true }
                ]
            },
            {
                id: 4,
                safeBehaviorDescription: 'Sample good behavior description 4',
                unsafeBehaviorDescription: 'Sample bad behavior description 4',
                motivators: [
                    {
                        id: 5,
                        value:
                            'missing knowledge (the person need more knowledge/skills to perform the job or to respond to conditions)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 10,
                        value:
                            'issue raised but no fixed (problem is well known but actions are ineffective or not taken)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    }
                ],
                category: {
                    id: 3,
                    value: 'Sample activity category 3'
                },
                pictures: [
                    { id: 9, path: 'good_behavior_picture.bmp', safe: true }
                ]
            },
            {
                id: 3,
                safeBehaviorDescription: 'Sample good behavior description 3',
                unsafeBehaviorDescription: 'Sample bad behavior description 3',
                motivators: [
                    {
                        id: 5,
                        value:
                            'missing knowledge (the person need more knowledge/skills to perform the job or to respond to conditions)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    },
                    {
                        id: 10,
                        value:
                            'issue raised but no fixed (problem is well known but actions are ineffective or not taken)',
                        causes: [
                            {
                                id: 3,
                                value:
                                    'Sample root cause 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            },
                            {
                                id: 1,
                                value:
                                    'Sample root cause 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        ]
                    }
                ],
                category: {
                    id: 3,
                    value: 'Sample activity category 3'
                },
                pictures: [
                    { id: 9, path: 'good_behavior_picture.bmp', safe: true }
                ]
            }
        ]
    },
    publishDate: new Date(),
    lastEdition: new Date(),
    author: 'bos champion 1',
    inUse: false
}

export const mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>PredefinedValues: predefinedValues = {
    physicalPlaces: ['place1', 'place2'],
    ppes: [
        {
            id: 1,
            contentPath: 'sample_ppe1.bmp'
        },
        {
            id: 2,
            contentPath: 'sample_ppe2.bmp'
        }
    ],
    localNotices: [
        {
            id: 22,
            title: 'title1',
            global: false,
            content:
                'Sample notice 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit vitae odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            mandatory: true
        },
        {
            id: 12,
            title: 'title2',
            global: false,
            content:
                'Sample notice 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit vitae odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            mandatory: true
        }
    ],
    globalNotices: [
        {
            id: 2,
            title: 'title3',
            global: true,
            content:
                'Sample notice 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit vitae odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            mandatory: true
        },
        {
            id: 1,
            title: 'title2',
            global: true,
            content:
                'Sample notice 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit vitae odio vitae vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            mandatory: true
        }
    ],
    categories: [
        {
            id: 1,
            value: 'Sample activity category 1'
        },
        {
            id: 2,
            value: 'Sample activity category 2'
        },
        {
            id: 3,
            value: 'Sample activity category 3'
        },
        {
            id: 4,
            value: 'Sample activity category 4'
        }
    ]
}

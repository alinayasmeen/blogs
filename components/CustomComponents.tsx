import {PortableTextComponents} from '@portabletext/react'


export const Components: PortableTextComponents = {
    block:{
        h1:({children}) => <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-300 mb-4 ">{children}</h1>,
        h2:({children}) => <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4 ">{children}</h2>,
        h3:({children}) => <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 mb-4 ">{children}</h3>,
        h4:({children}) => <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-4 ">{children}</h4>,
        h5:({children}) => <h5 className="text-base font-semibold text-gray-800 dark:text-gray-300 mb-4 ">{children}</h5>,
        h6:({children}) => <h6 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-4 ">{children}</h6>,
        p:({children}) => <p className="text-base text-gray-700 dark:text-gray-400 mb-4 animate-fadeIn">{children}</p>,
        number:({children}) => <ol className="list-decimal list-inside text-base text-gray-700 dark:text-gray-400 mb-4 animate-fadeIn">{children}</ol>,

    },
    
        listItem: {
            bullet: ({children}) => <li className="text-lg">{children}</li>,
            number: ({children}) => <li className="text-lg">{children}</li>,
            checkmarks: ({children}) => <li className="text-lg">{children}</li>,
        },    
}
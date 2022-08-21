import React from 'react';

const Listeconomic = () => {
    return (
        <div className=''>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                RFQ Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Project Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Due
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descrition
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Budget
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                RX20/12/2011
                            </th>
                            <td className="px-6 py-4">
                                Supply desktop
                            </td>
                            <td className="px-6 py-4">
                                CBD
                            </td>
                            <td className="px-6 py-4">
                                2022/02/12
                            </td>
                            <td class="px-6 py-4">
                                2022/12/20
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                R35 000.00
                            </td>
                            <td className="px-6 py-4 text-right">
                                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                RX20/12/2011
                            </th>
                            <td className="px-6 py-4">
                                Supply desktop
                            </td>
                            <td className="px-6 py-4">
                                CBD
                            </td>
                            <td className="px-6 py-4">
                                2022/02/12
                            </td>
                            <td class="px-6 py-4">
                                2022/12/20
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                R35 000.00
                            </td>
                            <td className="px-6 py-4 text-right">
                                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                RX20/12/2011
                            </th>
                            <td className="px-6 py-4">
                                Supply desktop
                            </td>
                            <td className="px-6 py-4">
                                CBD
                            </td>
                            <td className="px-6 py-4">
                                2022/02/12
                            </td>
                            <td class="px-6 py-4">
                                2022/12/20
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                R35 000.00
                            </td>
                            <td className="px-6 py-4 text-right">
                                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Listeconomic

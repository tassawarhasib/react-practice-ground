import React from 'react'

const Card = ({ userData }) => {

    if (!userData || userData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen dark:bg-slate-800 gap-6 flex items-center justify-center">
            {userData.map((user) => (
                <div
                    key={user.login.uuid}
                    className="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform"
                >
                    <div className="flex items-center gap-4">
                        <img
                            src={user.picture.large}
                            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
                            alt={`${user.name.first} ${user.name.last}`}
                        />
                        <div className="w-fit transition-all transform duration-500">
                            <h1 className="text-gray-600 dark:text-gray-200 font-bold">
                                {user.name.first} {user.name.last}
                            </h1>
                            <p className="text-gray-600">{user.gender}</p>
                            <a
                                className="flex text-xs text-gray-600 dark:text-gray-200 "
                                href={`tel:${user.phone}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                                {user.phone}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;

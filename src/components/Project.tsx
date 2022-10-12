import React from 'react';

function Project() {
  return (
    <div className="max-w-xl mx-auto m-10 pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 lg:flex">
        <div className="project-screenshot h-48 lg:h-auto lg:w-48 flex-none bg-cover lg:rounded-t-none lg:rounded-l text-center overflow-hidden"></div>
        <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
            <div className="flex items-center justify-around">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Preview
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Source Code
                </button>
            </div>
        </div>
    </div>
  );
}

export default Project;
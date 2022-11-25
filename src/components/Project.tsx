import React from 'react';
import logo from '../images/projectUI.png';

function Project(props: any) {
  return (
    <div className="flex justify-center mt-6">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" className='flex justify-center items-center'>
            <img className="h-52 w-52 rounded-t-lg" src={logo} alt=""/>
            </a>
            <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {props.description}
                </p>
                <a href={props.sourceLink} rel='noreferrer' target='_blank'>
                <button type="button" className="mr-5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source Code</button>
                </a>
                <a href={props.previewLink} rel='noreferrer' target='_blank'>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Preview</button>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Project;
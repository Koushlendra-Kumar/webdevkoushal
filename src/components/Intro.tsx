import React from 'react';

function Intro() {
    return (
        <div className='relative max-w-lg mx-auto pt-20 sm:pt-24 lg:pt-32 p-6'>
            <h1 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center '>Hi, I'm Koushal,<br/> a web developer</h1>
            <div className='flex items-center justify-center'>
                <svg className="fill-current h-24 w-24 m-6" width="54" height="54" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360"><title>MongoDB</title><path d="M203.77731,148.85754c-10.8147-12.762-20.13269-25.8139-22.02478-28.49224a.426.426,0,0,0-.70032.00006c-1.89172,2.6784-11.20758,15.73022-22.02191,28.49218-92.69141,118.085,14.62982,197.75507,14.62982,197.75507l.87.60461c.8136,12.32624,2.83508,30.041,2.83508,30.041H185.442s2.01282-17.63849,2.83-29.96106l.87549-.68451S296.46774,266.94257,203.77731,148.85754ZM181.404,344.88123h-.001s-4.811-4.10383-6.10962-6.16l-.01172-.22131,5.81946-128.56055a.30281.30281,0,0,1,.605,0l5.81946,128.56036-.01135.22065C186.21652,340.77625,181.404,344.88123,181.404,344.88123Z" fill="#00684a"/></svg>
            </div>
            <div className='flex items-center justify-between'>
                <svg className="fill-current h-24 w-24 m-6" width="54" height="54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><title>Express JS</title><path d="M40.53 77.82V50.74H42V55a5.57 5.57 0 0 0 .48-.6 7.28 7.28 0 0 1 6.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 0 1 .32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 0 1-5.88-3.88V77.82zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0 0 56 65.27a11.77 11.77 0 0 0-.26-9.68 6.77 6.77 0 0 0-7.13-3.94 6.59 6.59 0 0 0-5.89 4.87A33.4 33.4 0 0 0 42 60.32zM88.41 64A7.92 7.92 0 0 1 80.67 71c-6.16.31-9.05-3.78-9.51-8.5A13.62 13.62 0 0 1 72.36 55a8.37 8.37 0 0 1 8.71-4.67 8 8 0 0 1 7.1 6.09 41.09 41.09 0 0 1 .69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62C87 63.86 87.51 63.72 88.41 64zM72.67 59.55H87.14c-.09-4.56-2.93-7.86-6.78-7.91C76 51.57 72.86 54.75 72.67 59.55zM91.39 64.1h1.42A5.69 5.69 0 0 0 96.15 69a8.73 8.73 0 0 0 7.58-.2 3.41 3.41 0 0 0 2-3.35 3.09 3.09 0 0 0-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0 1 94 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 0 1 9.76-.15 5.14 5.14 0 0 1 2.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 0 0-3 .91 3 3 0 0 0-1.74 3 3 3 0 0 0 2 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 0 1 3.1 4.07 4.81 4.81 0 0 1-2.59 5c-3.34 1.89-8.84 1.39-11.29-1A6.67 6.67 0 0 1 91.39 64.1zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 0 0-3.54-4.18 8.73 8.73 0 0 0-5.61.27 3.41 3.41 0 0 0-2.47 3.25 3.14 3.14 0 0 0 2.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 0 1 1.94.59 5 5 0 0 1 .27 9.31 11.13 11.13 0 0 1-9 .09 6.24 6.24 0 0 1-3.76-6.06l.56 0h.74a7.29 7.29 0 0 0 11.1 4.64 3.57 3.57 0 0 0 1.92-3.34 3.09 3.09 0 0 0-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 0 1-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 0 1 9.92-.11A5.23 5.23 0 0 1 125.21 56.61zM38.1 70.51a2.29 2.29 0 0 1-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 0 1-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 0 1 2.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 0 1 2.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 0 0 0 1.49C33.29 64.07 35.66 67.25 38.1 70.51zM70.92 50.66v1.4a7.25 7.25 0 0 0-7.72 7.49q0 4.94 0 9.88c0 .35 0 .7 0 1.12H61.77V50.74h1.4V54.8C64.9 51.84 67.57 50.74 70.92 50.66zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16C3.54 67.3 8.13 71.14 14 69.18a6.09 6.09 0 0 0 3.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 0 1-3.88 5.93 9.4 9.4 0 0 1-10.95-1.4 9.85 9.85 0 0 1-2.46-5.78c0-.34-.13-.68-.2-1Q2.13 60.85 2.13 60zm1.69-.43H18.29c-.09-4.61-3-7.88-6.88-7.91C7.09 51.6 4 54.8 3.81 59.55z"/></svg>
                <svg className="fill-current h-24 w-24 m-6" width="54" height="54" fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><title>TypeScript</title><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>
                <svg className="fill-current h-24 w-24 m-6" width="54" height="54" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><title>React JS</title><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
            </div>
            <div className='flex items-center justify-center'>
            <svg className="fill-current h-24 w-24 m-6" width="54" height="54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><title>Node JS</title><path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/></svg>
            </div>
        </div>
    )
}

export default Intro;
'use client';

import React from 'react';

export const PlatformFeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'AI builder',
      desc: 'Generate pages, sections, copy, and app flows.',
      svg: (
        <svg aria-hidden="true" fill="currentColor" height="26" viewBox="0 0 256 256" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M214.86,180.12a8,8,0,0,1-11,2.74L136,142.13V216a8,8,0,0,1-16,0V142.13L52.12,182.86a8,8,0,1,1-8.23-13.72L112.45,128,43.89,86.86a8,8,0,1,1,8.23-13.72L120,113.87V40a8,8,0,0,1,16,0v73.87l67.88-40.73a8,8,0,1,1,8.23,13.72L143.55,128l68.56,41.14A8,8,0,0,1,214.86,180.12Z" />
        </svg>
      ),
    },
    {
      title: 'CMS',
      desc: 'Manage dynamic content for blogs, resources, and more.',
      svg: (
        <svg aria-hidden="true" fill="currentColor" height="26" viewBox="0 0 256 256" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" />
        </svg>
      ),
    },
    {
      title: 'Responsive',
      desc: 'Create desktop, tablet, and mobile-ready experiences.',
      svg: (
        <svg aria-hidden="true" fill="currentColor" height="26" viewBox="0 0 256 256" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z" />
        </svg>
      ),
    },
    {
      title: 'SEO',
      desc: 'Edit metadata, page structure, and social previews.',
      svg: (
        <svg aria-hidden="true" fill="currentColor" height="26" viewBox="0 0 256 256" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
        </svg>
      ),
    },
    {
      title: 'Analytics',
      desc: 'Understand traffic and improve what matters.',
      svg: (
        <svg aria-hidden="true" fill="currentColor" height="26" viewBox="0 0 256 256" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z" />
        </svg>
      ),
    },
    {
      title: 'Publishing',
      desc: 'Launch, update, and keep improving with AI.',
      svg: (
        <svg aria-hidden="true" fill="currentColor" height="26" viewBox="0 0 256 256" width="26" xmlns="http://www.w3.org/2000/svg">
          <path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-x-clip bg-white pb-16" id="platform">
      <div className="mx-auto w-full max-w-[1240px] box-border px-5 pt-16 md:px-[50px]">
        <div className="mb-[34px] text-left">
          <h2 className="mb-4 text-[clamp(28px,6vw,48px)] font-medium leading-[1.2] text-ink-strong">
            A full website platform, not just a generator.
          </h2>
          <p className="max-w-[520px] text-[clamp(1rem,1.3vw,1.12rem)] leading-relaxed text-gray-500">
            Create, edit, manage, publish, and improve your site from one place.
          </p>
        </div>
      </div>

      <div
        className="flex snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain pb-1 pt-4 [--edge:1.25rem] [-ms-overflow-style:none] [scrollbar-width:none] [scroll-padding-left:var(--edge)] [&::-webkit-scrollbar]:hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] pl-[var(--edge)] pr-[var(--edge)] md:[--edge:max(50px,calc((100vw-1240px)/2+50px))]"
        role="list"
      >
        {features.map((f) => (
          <article
            key={f.title}
            className="group feature-flame relative isolate flex min-h-[330px] snap-start flex-col overflow-hidden rounded-[20px] bg-stone-100 p-6 [flex:0_0_clamp(240px,24vw,320px)] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-2.5 max-[680px]:min-h-[280px] max-[680px]:[flex:0_0_78vw]"
            role="listitem"
          >
            <span className="mb-auto inline-flex items-center justify-start text-ink-strong">
              {f.svg}
            </span>
            <h3 className="mb-1.5 mt-6 text-[15px] font-normal leading-[22px] tracking-[0.15px] text-stone-500 transition-colors duration-[450ms] [font-family:Inter,sans-serif] group-hover:text-static-white">
              {f.title}
            </h3>
            <p className="text-[15px] font-normal leading-[22px] tracking-[0.15px] text-black transition-colors duration-[450ms] [font-family:Inter,sans-serif] group-hover:text-static-white">
              {f.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};


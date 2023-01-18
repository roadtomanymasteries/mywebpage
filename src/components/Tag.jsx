import React, { styled } from 'react';

export default function Tag() {
  const frontEndTags = [
    'TypeScript',
    'ReactJS',
    'JavaScript',
    'Astro',
    'Material UI',
    'NextJS',
    'Storybook',
    'HTML5',
    'CSS3',
    'Jest',
    'TailwindCSS',
    'NodeJS',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'AWS AppSync/Lambda',
  ];

  const divider = {
    margin: '1.5em auto',
    position: 'relative',
    height: '9px',
    width: '9px',
    border: 'transparent',
    overflow: 'visible',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg width="10" height="9" viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.91043 1.29752C4.30449 0.688518 5.19551 0.688519 5.58957 1.29752L9.25143 6.95675C9.68196 7.62211 9.20436 8.5 8.41186 8.5H1.08814C0.29564 8.5 -0.181954 7.62211 0.248574 6.95675L3.91043 1.29752Z" fill="%23FCB643" /></svg>')`,
  };

  return (
    <>
      <div class="mt-2 ml-[50%] pr-14">
        <div style={divider} />
        <ul class="flex flex-row gap-2 flex-wrap p-2">
          {frontEndTags.map((name) => {
            return (
              <p class={`text-main text-font semibold border rounded p-1`}>
                {name}
              </p>
            );
          })}
        </ul>
      </div>
    </>
  );
}

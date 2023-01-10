/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { projects } from "../../src/projects";

const Work = () => {
  return (
    <div className="my_work" id="work" name="work">
      <h2 className="proj_heading">
        <span>Pro</span>j<span>ects</span>
      </h2>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap">
            {projects.map((item, index) => {
              return (
                <div key={index} className="p-4 lg:w-1/4 md:w-1/2 mx-auto ">
                  <div className="h-full flex flex-col items-center text-center border-2 rounded-lg bg-cyan-500 hover:shadow-2xl border-cyan-500 hover:border-sky-100 ">
                    <img
                      alt={item.title}
                      className="flex-shrink-0 rounded-md w-full h-56 object-cover object-center mb-4"
                      src={item.thumbnail}
                    />

                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-gray-900">
                        {item.title}
                      </h2>
                      <h3 className="text-gray-500 h-12">{item.technology}</h3>
                      <p className="mb-4 h-20">{item.description}</p>
                      <span className="inline-flex">
                        <a
                          className="ml-2 text-gray-500"
                          title="project github repo"
                          href={item.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                            />
                          </svg>
                        </a>
                        <a
                          className="ml-2 text-gray-500"
                          title="project live demo"
                          href={item.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                            />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;

import React from "react";

function Entry(props) {
  return (
    <article className="bg-gray-300 rounded-3xl overflow-hidden shadow-md border-2 border-gray-400 h-full hover:scale-105 transition-transform duration-300">

      {/* Image */}
      {props.img && (
        <div className="w-full h-56">
          <img
            className="w-full h-full object-cover"
            src={props.img.src}
            alt={props.img.alt}
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 text-black">

        {/* Country + Map */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-bold text-sm hover:underline">
            {props.country}
          </span>

          <a
            className="text-sky-500 text-sm hover:text-sky-700"
            href={props.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View in map
          </a>
        </div>

        {/* Title */}
        <h1 className="font-extrabold text-sky-700 text-2xl mb-2">
          {props.title}
        </h1>

        {/* Dates */}
        <p className="font-medium text-sm mb-3">
          {props.dates}
        </p>

        {/* Description */}
        <p className="font-light text-sky-500 text-sm leading-relaxed">
          {props.text}
        </p>

      </div>
    </article>
  );
}

export default Entry;
import React, { useState } from "react";
import NextImage from "next/image";
import {
  imageSources,
  iconColors,
  ImageSourceKey,
} from "../utils/imageSources";

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  caption?: string;
  source?: ImageSourceKey; // Use predefined sources from imageSources
}

export function Image({
  src,
  alt,
  width,
  height,
  className = "",
  caption,
  source,
}: ImageProps) {
  const [imageError, setImageError] = useState(false);

  // Use source from imageSources if provided, otherwise use src
  const imageSrc = source ? imageSources[source] : src;
  const iconColor = source ? iconColors[source] : undefined;

  // Determine if this is an SVG file
  const isSvg =
    imageSrc.toLowerCase().endsWith(".svg") || imageSrc.includes("svg");

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <div className="my-6 p-4 border border-red-300 rounded-lg bg-red-50">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-red-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-red-800">
              Error loading image
            </h3>
            <p className="mt-1 text-sm text-red-700">
              Failed to load image: {imageSrc}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <figure className={`my-6 ${className}`}>
      <div className="relative">
        {isSvg && iconColor ? (
          // Use CSS mask for colored SVG icons from our predefined sources
          <div
            className="rounded-lg w-full"
            style={{
              backgroundColor: iconColor,
              mask: `url(${imageSrc}) no-repeat center`,
              maskSize: "contain",
              WebkitMask: `url(${imageSrc}) no-repeat center`,
              WebkitMaskSize: "contain",
              width: width || "100%",
              height: height || "auto",
              minHeight:
                typeof height === "number"
                  ? height
                  : height
                  ? parseInt(height.toString())
                  : 200,
            }}
          />
        ) : (
          // Use NextImage for regular images and uncolored SVGs
          <NextImage
            src={imageSrc}
            alt={alt}
            width={
              typeof width === "number"
                ? width
                : width
                ? parseInt(width.toString())
                : 800
            }
            height={
              typeof height === "number"
                ? height
                : height
                ? parseInt(height.toString())
                : 600
            }
            onError={handleImageError}
            className={`${
              isSvg ? "object-contain" : "object-cover"
            } rounded-lg w-full h-auto`}
            style={{
              width: width || "100%",
              height: height || "auto",
            }}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

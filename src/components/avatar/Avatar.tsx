import React from "react";

/**
 * Renders a user avatar image with customizable alt text, ARIA description, and additional CSS classes.
 *
 * @param avatarUrl - The URL of the avatar image to display.
 * @param altText - The alternative text for the image, used for accessibility.
 * @param ariaDescription - A description of the image for assistive technologies.
 * @param classNames - Optional additional CSS class names to apply to the image element.
 * @returns The rendered avatar image element.
 */
export default function Avatar({
  avatarUrl,
  altText,
  ariaDescription,
  classNames = "",
}: {
  avatarUrl: string;
  altText: string;
  ariaDescription: string;
  classNames?: string;
}) {
  return (
    <img
      className={`avatar ${classNames}`}
      src={avatarUrl}
      alt={altText}
      aria-description={ariaDescription}
    />
  );
}

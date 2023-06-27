"use client";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";

import React from "react";
export const ShareButtons = ({ postId }) => {
  return (
    <div className="flex flex-row space-x-3 mt-4">
      <FacebookShareButton
        url={"https://mywebclass.tejpatel.live/"}
        onClick={() => {
          gtag("event", "share", {
            method: "Facebook",
            content_type: "post",
            item_id: postId,
          });
        }}
      >
        <FacebookIcon size={45} round />
      </FacebookShareButton>
      <LinkedinShareButton
        url={"https://mywebclass.tejpatel.live/"}
        onClick={() => {
          gtag("event", "share", {
            method: "Linkedin",
            content_type: "post",
            item_id: postId,
          });
        }}
      >
        <LinkedinIcon size={45} round />
      </LinkedinShareButton>
      <TwitterShareButton
        url="https://mywebclass.tejpatel.live/"
        onClick={() => {
          gtag("event", "share", {
            method: "Twitter",
            content_type: "post",
            item_id: postId,
          });
        }}
      >
        <TwitterIcon size={45} round />
      </TwitterShareButton>
    </div>
  );
};

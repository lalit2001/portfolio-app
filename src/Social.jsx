import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import './index.css'

export default function SocialFollow() {
  return (
    <>
    <div className='text-center social'>
    <a href="https://www.youtube.com/channel/UCvWUHUgWw_osZUBk2-yJJjQ"
  className="youtube social" target='_blank'>
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/slalit.maharana/"
  className="facebook social" _blank>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/moharanalalit" className="twitter social" _blank>
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/er_nuke_virus__bolte/"
  className="instagram social" _blank>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
</div>
    </>
  );
}
import React, { useState } from "react";
import styles from "./Webview.scss";
import hub, { OPEN_URL } from "../../script/hub";

export default function Webview({ init = "" }) {
  const [url, setUrl] = useState(init);
  hub.on(OPEN_URL, url => setUrl(url));

  return <iframe src={url} frameBorder="0" className={styles.iframe} />;
}

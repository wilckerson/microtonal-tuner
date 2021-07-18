import React from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import LocalData from "../core/LocalData";

function TuningRedirect(props: any) {
  const history = useHistory();
  const { tuningName } = useParams<{ tuningName: string }>();

  useEffect(() => {
    LocalData.setCurrentTuningByName(tuningName);
    history.replace("/");
  }, [history, tuningName]);

  return <div></div>;
}

export default TuningRedirect;

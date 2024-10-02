import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LocalData from "../core/LocalData";

function TuningRedirect() {
  const navigate = useNavigate();
  const { tuningName } = useParams<{ tuningName: string }>();

  useEffect(() => {
    if (tuningName) {
      LocalData.setCurrentTuningByName(tuningName);
    }
    navigate("/", { replace: true });
  }, [history, tuningName]);

  return <div></div>;
}

export default TuningRedirect;

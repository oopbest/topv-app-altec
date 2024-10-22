import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";

export default function ErrorButton({ reset }: { reset: () => void }) {
  return (
    <>
      <button className="btn-primary group m-3" onClick={() => reset()}>
        Try again
        <FontAwesomeIcon
          icon={faRefresh}
          className="my-auto ml-2 group-hover:rotate-90"
        />
      </button>
    </>
  );
}

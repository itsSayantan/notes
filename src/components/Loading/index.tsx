import { LoadingPropsType } from "../../shared/types/props";
import { DEFAULT_LOADING_TEXT, Z_INDICES } from "../../shared/constants";
import { LoadingWrapper, LoadingBox } from "./styles";

const Loading = (props: LoadingPropsType) => {
  return (
    <LoadingWrapper zIndex={Z_INDICES["Loading"] || 2}>
      <LoadingBox>
        {props?.text?.trim() ? props?.text?.trim() : DEFAULT_LOADING_TEXT}
      </LoadingBox>
    </LoadingWrapper>
  );
};

export default Loading;

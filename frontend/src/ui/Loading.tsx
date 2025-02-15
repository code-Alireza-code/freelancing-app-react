import { ThreeDots } from "react-loader-spinner";

type LoadingPropsType = {
  width?: string;
  height?: string;
};

function Loading({ width = "75", height = "30" }: LoadingPropsType) {
  return (
    <div>
      <ThreeDots
        height={height}
        width={width}
        radius={9}
        wrapperClass="flex items-center justify-center"
        color="rgb(var(--color-primary-900))"
      />
    </div>
  );
}

export default Loading;

export default function StudioLogo(props: any) {
  return (
    <div className="logoWrapper">
      <div className="image-container">CF</div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

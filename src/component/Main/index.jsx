export default function Comp({ prop }) {
  return (
    <>
      <div className={prop.iconClassName}>
        <img src={prop.imgSrc} alt="logo" />
        <h2>{prop.tittle}</h2>
      </div>
      <div className={prop.codeId}>
        <textarea id={prop.textID} className={prop.className}></textarea>
      </div>
    </>
  );
}

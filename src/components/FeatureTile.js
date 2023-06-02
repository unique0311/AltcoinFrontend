import '../CSS/component.css';

const FeatureTile = ({featureImage, featureTitle, featureDetail}) => {
  return (
    <div className="featureTile_container">
      <img src={featureImage} />
      <h5>{featureTitle}</h5>
      <p>
        {featureDetail}
      </p>
    </div>
  )
}

export default FeatureTile;
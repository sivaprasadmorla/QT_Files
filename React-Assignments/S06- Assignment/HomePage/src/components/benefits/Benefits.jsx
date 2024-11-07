import "./Benefits.css";

function Benefits() {
  function benefit(icon, name) {
    return (
      <div className="benefit">
        <i className={icon}></i>
        <h3>{name}</h3>
      </div>
    );
  }
  return (
    <div className="Benefit-container">
      {benefit("fa-solid fa-check", "Quality Product")}
      {benefit("fa-solid fa-truck-fast", "Free Shipping")}
      {benefit("fa-solid fa-arrow-right-arrow-left", "14-Day Return")}
      {benefit("fa-solid fa-phone-volume", "24/7 Support")}
    </div>
  );
}

export default Benefits;

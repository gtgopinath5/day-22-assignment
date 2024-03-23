import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function Card({ item }) { // Changed component name to Card
  return (
    <div className="col">
      <div className={`card mb-4 rounded-3 shadow-sm ${item.boxFocus ? 'border-primary' : ''}`}>
        <div className={`text-center card-header py-3 ${item.boxFocus ? 'text-bg-primary border-primary' : ''}`}>
          <h4 className="my-0 fw-normal">{item.planName}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">${item.price}<small className="text-muted fw-light">/ month</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            {
              item.features.map((feature, index) => {
                return (
                  <li key={index}>
                    {feature.enabled ? <span><TiTick />{feature.name}</span> : <> <ImCross size={9} />{" "}<del>{feature.name}</del></>}
                  </li>
                );
              })
            }
          </ul>
          <button type="button" className={`w-100 btn btn-lg ${item.buttonFocus ? 'btn-primary' : 'btn-outline-primary'}`}>Sign up for free</button>
        </div>
      </div>
    </div>
  );
}

export default Card; // Changed export name to Card

import './App.css';
import Card from './priceCard'; // Corrected import statement
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  let data = [
    {
      planName: "Free",
      price: 0,
      features: [
        {
          name: "single user",
          enabled: true
        },
        {
          name: "50GB of storage",
          enabled: true
        },
        {
          name: "unlimited public projects",
          enabled: true
        },
        {
          name: "community access",
          enabled: true
        },
        {
          name: "unlimited private projects",
          enabled: false
        },
        {
          name: "dedicated phone support",
          enabled: false
        },
        {
          name: "free subdomain",
          enabled: false
        },
        {
          name: "monthly status reports",
          enabled: false
        }
      ],buttonFocus: true
    },
    {
      planName: "Plus",
      price: 9,
      features: [
        {
          name: "single user",
          enabled: true
        },
        {
          name: "50GB of storage",
          enabled: true
        },
        {
          name: "unlimited public projects",
          enabled:true
        },
        {
          name: "community access",
          enabled:true
        },
        {
          name: "unlimited private projects",
          enabled:true
        },
        {
          name: "dedicated phone support",
          enabled:true
        },
        {
          name: "free subdomain",
          enabled:true
        },
        {
          name: "monthly status reports",
          enabled:false
        }
      ],
      buttonFocus: true
    },
    {
      planName: "pro",
      price: 49,
      features: [
        {
          name: "single user",
          enabled: true
        },
        {
          name: "50GB of storage",
          enabled: true
        },
        {
          name: "unlimited public projects",
          enabled:true
        },
        {
          name: "community access",
          enabled:true
        },
        {
          name: "unlimited private projects",
          enabled:true
        },
        {
          name: "dedicated phone support",
          enabled:true
        },
        {
          name: "free subdomain",
          enabled:true
        },
        {
          name: "monthly status reports",
          enabled:true
        }
      ],
      buttonFocus: true
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="background-box">
          <div className="row">
        {data.map((item, index) => (
          <Card item={item} key={index} /> // Changed component name to Card
        ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



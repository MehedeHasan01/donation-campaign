import { Helmet } from "react-helmet";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  } ;

const Location = () => {
    return (
        <div>
            <Helmet><title>Donation | Location</title> </Helmet>
            <h1 className="text-4xl text-center my-4 font-bold">Donation Location</h1>
            <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </div>
    );
};

export default Location;
import React, { Component } from "react";

class Weather extends Component {
  render() {
    const { city, country, temprature, description, humidity, error } =
      this.props;

    return (
      <div className="info">
        {city && (
          <p className="info-key">
            city :<span className="info-value">{city}</span>
          </p>
        )}
        {country && (
          <p className="info-key">
            country : <span className="info-value">{country}</span>
          </p>
        )}
        {temprature && (
          <p className="info-key">
            temprature : <span className="info-value">{temprature}</span>
          </p>
        )}
        {description && (
          <p className="info-key">
            humadiate : <span className="info-value">{humidity}</span>
          </p>
        )}
        {description && (
          <p className="info-key">
            description : <span className="info-value">{description}</span>
          </p>
        )}

        {error && <p> {error}</p>}
      </div>
    );
  }
}
export default Weather;

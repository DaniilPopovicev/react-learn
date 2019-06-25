import React, {Component} from 'react';
import './App.css';
import Car from '../Car/Car'
import carsArr from '../Car/carsArr'
class App extends Component {

  state = {
    cars: carsArr,
    pageTitle: 'React components',
    showCars: false
  };

	toggleCarsHandler = () => {
	  this.setState({
      showCars: !this.state.showCars
    })
  };

	onChangeName = (name, index) => {
		const car = this.state.cars[index];
		car.name = name;
		const cars = [...this.state.cars];
		cars[index] = car;
		this.setState ({cars})
  };

	deleteHandler(index) {
		const cars = this.state.cars.concat();
		cars.splice(index, 1);
		this.setState({cars})
	}

  render () {
    const divStyle = {
      textAlign: 'center'
    };
	  return (
		  <div style={divStyle}>
			  <h1>{this.state.pageTitle}</h1>
        <button
          onClick={this.toggleCarsHandler}>
          Toggle cars
        </button>
			  { this.state.showCars
				  ? this.state.cars.map((car, index) => {
						  return (
							  <div style={{
							  	width: 400,
								  margin: 'auto',
								  paddingTop: '20px'
							  }}>
								  <Car
									  key={index}
									  name={car.name}
									  year={car.year}
									  onDelete={this.deleteHandler.bind(this, index)}
									  onChangeName={(event) => this.onChangeName(event.target.value, index)}
								  />
							  </div>

						  )
				  })
				  : null
			  }
		  </div>
	  );
  }
}

export default App;

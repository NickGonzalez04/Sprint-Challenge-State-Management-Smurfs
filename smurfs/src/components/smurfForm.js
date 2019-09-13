import React from 'react'
import axios from 'axios';

 class newSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    }

      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

      addNewSmurf = e => {
        e.preventDefault();
       const newSmurf = this.state
        this.props.addNewSmurf(newSmurf)

          this.setState({
            name: '',
            age: '',
            height: '',
        })
    }



            axios
             .post('http://localhost:3333/smurfs', addNewSmurf)
             .then(res => {
                console.log(res.data)
            })
            .catch (err => {
                console.log("error", err)
            })
       

      render() {
        return (
            <div>
                <form onSubmit={this.addNewSmurf}>
                    <input
                        type='text'
                        name='name'
                        placeholder='New Smurf Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Smurf Age'
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='height'
                        placeholder='Smurf Height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Add Smurf
                    </button>
                </form>
            </div>
        )
    }
}
 export default newSmurfForm;